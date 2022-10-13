from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCertificatePathParams:
    certificate_id: str = field(default=None, metadata={'path_param': { 'field_name': 'certificate_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCertificateRequest:
    path_params: GetCertificatePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCertificate200ApplicationJSON:
    certificate: Optional[shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    

@dataclass_json
@dataclass
class GetCertificate401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class GetCertificateResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_certificate_200_application_json_object: Optional[GetCertificate200ApplicationJSON] = field(default=None)
    get_certificate_401_application_json_object: Optional[GetCertificate401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
