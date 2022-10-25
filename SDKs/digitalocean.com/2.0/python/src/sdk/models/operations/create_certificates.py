from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum(str, Enum):
    CUSTOM = "custom"
    LETS_ENCRYPT = "lets_encrypt"


@dataclass_json
@dataclass
class CreateCertificatesRequestBodyLetSEncryptCertificateRequest:
    dns_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_names' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum(str, Enum):
    CUSTOM = "custom"
    LETS_ENCRYPT = "lets_encrypt"


@dataclass_json
@dataclass
class CreateCertificatesRequestBodyCustomCertificateRequest:
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_chain' }})
    leaf_certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaf_certificate' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key' }})
    type: Optional[CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateCertificatesRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateCertificates201ApplicationJSON:
    certificate: Optional[shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    

@dataclass_json
@dataclass
class CreateCertificates401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateCertificatesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_certificates_201_application_json_object: Optional[CreateCertificates201ApplicationJSON] = field(default=None)
    create_certificates_401_application_json_object: Optional[CreateCertificates401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
