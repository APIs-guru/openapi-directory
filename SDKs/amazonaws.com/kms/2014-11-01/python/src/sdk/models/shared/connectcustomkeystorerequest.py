from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectCustomKeyStoreRequest:
    custom_key_store_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreId') }})
    
