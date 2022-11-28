from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerData:
    r"""CustomerData
    Customer information
    """
    
    accounts_limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountsLimit') }})
    accounts_used: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountsUsed') }})
    customer_encryption_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerEncryptionEnabled') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_provider_customer: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProviderCustomer') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    space_limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceLimit') }})
    space_used: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceUsed') }})
    cnt_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntFiles') }})
    cnt_folders: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntFolders') }})
    cnt_rooms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntRooms') }})
    
