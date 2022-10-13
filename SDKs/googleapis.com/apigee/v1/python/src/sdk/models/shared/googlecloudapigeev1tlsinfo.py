from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1tlsinfocommonname


@dataclass_json
@dataclass
class GoogleCloudApigeeV1TLSInfo:
    ciphers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ciphers' }})
    client_auth_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientAuthEnabled' }})
    common_name: Optional[googlecloudapigeev1tlsinfocommonname.GoogleCloudApigeeV1TLSInfoCommonName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ignore_validation_errors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreValidationErrors' }})
    key_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyAlias' }})
    key_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyStore' }})
    protocols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    trust_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustStore' }})
    
