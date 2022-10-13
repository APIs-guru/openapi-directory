from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutOrdersIDShipPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOrdersIDShipRequestBodyOrderShipV2:
    tracking_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingNumber' }})
    weight_override: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightOverride' }})
    

@dataclass
class PutOrdersIDShipSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutOrdersIDShipRequest:
    path_params: PutOrdersIDShipPathParams = field(default=None)
    request: PutOrdersIDShipRequestBodyOrderShipV2 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutOrdersIDShipSecurity = field(default=None)
    

@dataclass
class PutOrdersIDShipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema] = field(default=None)
    
