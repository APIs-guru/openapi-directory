from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateCustomKeyStoreRequest:
    cloud_hsm_cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudHsmClusterId') }})
    custom_key_store_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreName') }})
    key_store_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyStorePassword') }})
    trust_anchor_certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustAnchorCertificate') }})
    
