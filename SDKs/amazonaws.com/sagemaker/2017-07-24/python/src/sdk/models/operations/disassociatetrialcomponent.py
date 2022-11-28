from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DisassociateTrialComponentXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DISASSOCIATE_TRIAL_COMPONENT = "SageMaker.DisassociateTrialComponent"


@dataclass
class DisassociateTrialComponentHeaders:
    x_amz_target: DisassociateTrialComponentXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateTrialComponentRequest:
    headers: DisassociateTrialComponentHeaders = field()
    request: shared.DisassociateTrialComponentRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateTrialComponentResponse:
    content_type: str = field()
    status_code: int = field()
    disassociate_trial_component_response: Optional[shared.DisassociateTrialComponentResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    
