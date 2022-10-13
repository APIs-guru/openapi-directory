from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum(str, Enum):
    PENDING = "pending"
    VERIFIED = "verified"
    ERROR = "error"

class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum(str, Enum):
    CUSTOM = "custom"
    LETS_ENCRYPT = "lets_encrypt"


@dataclass_json
@dataclass
class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_names' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not_after', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1_fingerprint' }})
    state: Optional[Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
