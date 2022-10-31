from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCampaignPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCampaignHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCampaignRequestBodyWriteCampaignRequest:
    additional_treatments: Optional[List[shared.WriteTreatmentResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalTreatments' }})
    custom_delivery_configuration: Optional[shared.CustomDeliveryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDeliveryConfiguration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    holdout_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldoutPercent' }})
    hook: Optional[shared.CampaignHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hook' }})
    is_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPaused' }})
    limits: Optional[shared.CampaignLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limits' }})
    message_configuration: Optional[shared.MessageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    schedule: Optional[shared.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentId' }})
    segment_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentVersion' }})
    template_configuration: Optional[shared.TemplateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateConfiguration' }})
    treatment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentDescription' }})
    treatment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class CreateCampaignRequestBody:
    write_campaign_request: CreateCampaignRequestBodyWriteCampaignRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteCampaignRequest' }})
    

@dataclass
class CreateCampaignRequest:
    path_params: CreateCampaignPathParams = field(default=None)
    headers: CreateCampaignHeaders = field(default=None)
    request: CreateCampaignRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCampaignResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_campaign_response: Optional[shared.CreateCampaignResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
