from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCredentialsPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCredentialsQueryParams:
    expiry_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expiry_seconds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCredentialsRequest:
    path_params: GetCredentialsPathParams = field(default=None)
    query_params: GetCredentialsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCredentials200ApplicationJSON:
    certificate_authority_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_authority_data' }})
    client_certificate_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_certificate_data' }})
    client_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_key_data' }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass_json
@dataclass
class GetCredentials401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetCredentialsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_credentials_200_application_json_object: Optional[GetCredentials200ApplicationJSON] = field(default=None)
    get_credentials_401_application_json_object: Optional[GetCredentials401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
