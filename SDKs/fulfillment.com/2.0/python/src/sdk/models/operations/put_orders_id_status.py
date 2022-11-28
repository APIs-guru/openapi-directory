from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutOrdersIDStatusPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOrdersIDStatusStatusTypeSimpleV2Status:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    

@dataclass_json
@dataclass
class PutOrdersIDStatusStatusTypeSimpleV2:
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: PutOrdersIDStatusStatusTypeSimpleV2Status = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class PutOrdersIDStatusSecurity:
    fdc_auth: shared.SchemeFdcAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutOrdersIDStatusRequest:
    path_params: PutOrdersIDStatusPathParams = field()
    request: PutOrdersIDStatusStatusTypeSimpleV2 = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutOrdersIDStatusSecurity = field()
    

@dataclass
class PutOrdersIDStatusResponse:
    content_type: str = field()
    status_code: int = field()
    oneorders_post_responses_201_content_application_1json_schema: Optional[shared.OneordersPostResponses201ContentApplication1jsonSchema] = field(default=None)
    
