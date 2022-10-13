from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListKubernetesOptions200ApplicationJSON:
    options: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class ListKubernetesOptions401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListKubernetesOptionsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_kubernetes_options_200_application_json_object: Optional[ListKubernetesOptions200ApplicationJSON] = field(default=None)
    list_kubernetes_options_401_application_json_object: Optional[ListKubernetesOptions401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
