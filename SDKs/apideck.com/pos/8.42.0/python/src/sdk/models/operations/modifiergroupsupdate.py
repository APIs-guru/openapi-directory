from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ModifierGroupsUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifierGroupsUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ModifierGroupsUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ModifierGroupsUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ModifierGroupsUpdateRequest:
    path_params: ModifierGroupsUpdatePathParams = field(default=None)
    query_params: ModifierGroupsUpdateQueryParams = field(default=None)
    headers: ModifierGroupsUpdateHeaders = field(default=None)
    request: shared.ModifierGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ModifierGroupsUpdateSecurity = field(default=None)
    

@dataclass
class ModifierGroupsUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_modifier_group_response: Optional[shared.UpdateModifierGroupResponse] = field(default=None)
    

@dataclass
class ModifierGroupsUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ModifierGroupsUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
