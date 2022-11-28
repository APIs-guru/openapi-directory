from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class SendAutomationSignalXAmzTargetEnum(str, Enum):
    AMAZON_SSM_SEND_AUTOMATION_SIGNAL = "AmazonSSM.SendAutomationSignal"


@dataclass
class SendAutomationSignalHeaders:
    x_amz_target: SendAutomationSignalXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendAutomationSignalRequest:
    headers: SendAutomationSignalHeaders = field()
    request: shared.SendAutomationSignalRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendAutomationSignalResponse:
    content_type: str = field()
    status_code: int = field()
    automation_execution_not_found_exception: Optional[Any] = field(default=None)
    automation_step_not_found_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_automation_signal_exception: Optional[Any] = field(default=None)
    send_automation_signal_result: Optional[dict[str, Any]] = field(default=None)
    
