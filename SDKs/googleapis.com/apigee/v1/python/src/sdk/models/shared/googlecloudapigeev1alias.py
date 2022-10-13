from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1certificate

class GoogleCloudApigeeV1AliasTypeEnum(str, Enum):
    ALIAS_TYPE_UNSPECIFIED = "ALIAS_TYPE_UNSPECIFIED"
    CERT = "CERT"
    KEY_CERT = "KEY_CERT"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Alias:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    certs_info: Optional[googlecloudapigeev1certificate.GoogleCloudApigeeV1Certificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certsInfo' }})
    type: Optional[GoogleCloudApigeeV1AliasTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
