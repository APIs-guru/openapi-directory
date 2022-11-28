from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ResetServiceSettingXAmzTargetEnum(str, Enum):
    AMAZON_SSM_RESET_SERVICE_SETTING = "AmazonSSM.ResetServiceSetting"


@dataclass
class ResetServiceSettingHeaders:
    x_amz_target: ResetServiceSettingXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetServiceSettingRequest:
    headers: ResetServiceSettingHeaders = field()
    request: shared.ResetServiceSettingRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResetServiceSettingResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_error: Optional[Any] = field(default=None)
    reset_service_setting_result: Optional[shared.ResetServiceSettingResult] = field(default=None)
    service_setting_not_found: Optional[Any] = field(default=None)
    too_many_updates: Optional[Any] = field(default=None)
    
