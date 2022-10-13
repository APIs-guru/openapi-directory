from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import accountsettings


@dataclass_json
@dataclass
class UpdateAccountSettingsOutput:
    account_settings: accountsettings.AccountSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountSettings' }})
    
