from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateNotificationSettingsXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_NOTIFICATION_SETTINGS = "MTurkRequesterServiceV20170117.UpdateNotificationSettings"


@dataclass
class UpdateNotificationSettingsHeaders:
    x_amz_target: UpdateNotificationSettingsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNotificationSettingsRequest:
    headers: UpdateNotificationSettingsHeaders = field()
    request: shared.UpdateNotificationSettingsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNotificationSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    update_notification_settings_response: Optional[dict[str, Any]] = field(default=None)
    
