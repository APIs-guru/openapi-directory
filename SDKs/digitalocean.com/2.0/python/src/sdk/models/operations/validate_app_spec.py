from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ValidateAppSpecRequestBody:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_id' }})
    spec: shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

@dataclass
class ValidateAppSpecRequest:
    request: ValidateAppSpecRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ValidateAppSpec200ApplicationJSON:
    app_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_cost' }})
    app_is_static: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_is_static' }})
    app_name_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_name_available' }})
    app_name_suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_name_suggestion' }})
    app_tier_downgrade_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_tier_downgrade_cost' }})
    existing_static_apps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existing_static_apps' }})
    spec: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

@dataclass_json
@dataclass
class ValidateAppSpec401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ValidateAppSpecResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    validate_app_spec_200_application_json_object: Optional[ValidateAppSpec200ApplicationJSON] = field(default=None)
    validate_app_spec_401_application_json_object: Optional[ValidateAppSpec401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
