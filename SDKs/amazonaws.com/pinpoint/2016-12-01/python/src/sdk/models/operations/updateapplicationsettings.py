from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateApplicationSettingsPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateApplicationSettingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest:
    campaign_hook: Optional[shared.CampaignHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignHook' }})
    cloud_watch_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchMetricsEnabled' }})
    event_tagging_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTaggingEnabled' }})
    limits: Optional[shared.CampaignLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limits' }})
    quiet_time: Optional[shared.QuietTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuietTime' }})
    

@dataclass_json
@dataclass
class UpdateApplicationSettingsRequestBody:
    write_application_settings_request: UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteApplicationSettingsRequest' }})
    

@dataclass
class UpdateApplicationSettingsRequest:
    path_params: UpdateApplicationSettingsPathParams = field(default=None)
    headers: UpdateApplicationSettingsHeaders = field(default=None)
    request: UpdateApplicationSettingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateApplicationSettingsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_application_settings_response: Optional[shared.UpdateApplicationSettingsResponse] = field(default=None)
    
