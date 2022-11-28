from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutOrdersIDShipPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOrdersIDShipOrderShipV2:
    tracking_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumber') }})
    weight_override: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightOverride') }})
    

@dataclass
class PutOrdersIDShipSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutOrdersIDShipRequest:
    path_params: PutOrdersIDShipPathParams = field()
    request: PutOrdersIDShipOrderShipV2 = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutOrdersIDShipSecurity = field()
    

@dataclass
class PutOrdersIDShipResponse:
    content_type: str = field()
    status_code: int = field()
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema] = field(default=None)
    
