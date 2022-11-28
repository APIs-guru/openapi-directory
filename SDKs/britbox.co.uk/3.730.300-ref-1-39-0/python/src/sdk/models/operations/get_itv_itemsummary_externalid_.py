from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetItvItemsummaryExternalIDPathParams:
    external_id: str = field(metadata={'path_param': { 'field_name': 'externalId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItvItemsummaryExternalIDRequest:
    path_params: GetItvItemsummaryExternalIDPathParams = field()
    

@dataclass
class GetItvItemsummaryExternalIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_itv_itemsummary_external_id_302_application_json_object: Optional[dict[str, Any]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
