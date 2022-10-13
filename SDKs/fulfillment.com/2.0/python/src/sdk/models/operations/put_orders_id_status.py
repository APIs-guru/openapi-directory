from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutOrdersIDStatusPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOrdersIDStatusRequestBodyStatus:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    

@dataclass_json
@dataclass
class PutOrdersIDStatusRequestBodyStatusTypeSimpleV2:
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: PutOrdersIDStatusRequestBodyStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class PutOrdersIDStatusSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutOrdersIDStatusRequest:
    path_params: PutOrdersIDStatusPathParams = field(default=None)
    request: PutOrdersIDStatusRequestBodyStatusTypeSimpleV2 = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutOrdersIDStatusSecurity = field(default=None)
    

@dataclass
class PutOrdersIDStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema] = field(default=None)
    
