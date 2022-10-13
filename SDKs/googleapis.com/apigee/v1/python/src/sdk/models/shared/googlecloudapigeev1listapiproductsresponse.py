from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1apiproduct


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListAPIProductsResponse:
    api_product: Optional[List[googlecloudapigeev1apiproduct.GoogleCloudApigeeV1APIProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProduct' }})
    
