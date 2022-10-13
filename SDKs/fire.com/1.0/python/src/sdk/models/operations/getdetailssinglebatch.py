from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDetailsSingleBatchPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDetailsSingleBatchRequest:
    path_params: GetDetailsSingleBatchPathParams = field(default=None)
    

@dataclass
class GetDetailsSingleBatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    onebatches_get_responses_200_content_application_1json_schema_properties_items_items: Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems] = field(default=None)
    
