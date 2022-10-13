from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetItvItemsummaryExternalIDPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItvItemsummaryExternalIDRequest:
    path_params: GetItvItemsummaryExternalIDPathParams = field(default=None)
    

@dataclass
class GetItvItemsummaryExternalIDResponse:
    content_type: str = field(default=None)
    get_itv_itemsummary_external_id_302_application_json_object: Optional[dict[str, Any]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
