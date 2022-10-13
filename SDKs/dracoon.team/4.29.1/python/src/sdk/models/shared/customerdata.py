from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerData:
    accounts_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountsLimit' }})
    accounts_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountsUsed' }})
    cnt_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntFiles' }})
    cnt_folders: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntFolders' }})
    cnt_rooms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntRooms' }})
    customer_encryption_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerEncryptionEnabled' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_provider_customer: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProviderCustomer' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    space_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceLimit' }})
    space_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceUsed' }})
    
