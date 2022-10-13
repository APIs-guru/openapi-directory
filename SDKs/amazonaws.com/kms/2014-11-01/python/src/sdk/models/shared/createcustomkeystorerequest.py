from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateCustomKeyStoreRequest:
    cloud_hsm_cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudHsmClusterId' }})
    custom_key_store_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreName' }})
    key_store_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyStorePassword' }})
    trust_anchor_certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustAnchorCertificate' }})
    
