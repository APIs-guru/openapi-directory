from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateCustomKeyStoreRequest:
    cloud_hsm_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudHsmClusterId' }})
    custom_key_store_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreId' }})
    key_store_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyStorePassword' }})
    new_custom_key_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewCustomKeyStoreName' }})
    
