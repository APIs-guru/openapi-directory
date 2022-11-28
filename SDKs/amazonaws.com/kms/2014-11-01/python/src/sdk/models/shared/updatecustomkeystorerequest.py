from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateCustomKeyStoreRequest:
    custom_key_store_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreId') }})
    cloud_hsm_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudHsmClusterId') }})
    key_store_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyStorePassword') }})
    new_custom_key_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewCustomKeyStoreName') }})
    
