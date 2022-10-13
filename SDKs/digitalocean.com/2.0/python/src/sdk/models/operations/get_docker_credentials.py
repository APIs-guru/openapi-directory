from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDockerCredentialsQueryParams:
    expiry_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expiry_seconds', 'style': 'form', 'explode': True }})
    read_write: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'read_write', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDockerCredentialsRequest:
    query_params: GetDockerCredentialsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDockerCredentials200ApplicationJSONAuthsRegistryDigitaloceanCom:
    auth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    

@dataclass_json
@dataclass
class GetDockerCredentials200ApplicationJSONAuths:
    registry_digitalocean_com: Optional[GetDockerCredentials200ApplicationJSONAuthsRegistryDigitaloceanCom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registry.digitalocean.com' }})
    

@dataclass_json
@dataclass
class GetDockerCredentials200ApplicationJSON:
    auths: Optional[GetDockerCredentials200ApplicationJSONAuths] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auths' }})
    

@dataclass_json
@dataclass
class GetDockerCredentials401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetDockerCredentialsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_docker_credentials_200_application_json_object: Optional[GetDockerCredentials200ApplicationJSON] = field(default=None)
    get_docker_credentials_401_application_json_object: Optional[GetDockerCredentials401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
