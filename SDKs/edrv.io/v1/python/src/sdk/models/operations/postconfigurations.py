from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostConfigurationsRequestBody:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PostConfigurations201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PostConfigurationsRequest:
    request: PostConfigurationsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostConfigurationsResponse:
    content_type: str = field()
    status_code: int = field()
    post_configurations_201_application_json_object: Optional[PostConfigurations201ApplicationJSON] = field(default=None)
    
