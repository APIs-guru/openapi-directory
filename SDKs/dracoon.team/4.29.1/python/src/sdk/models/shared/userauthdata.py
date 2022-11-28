from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserAuthData:
    r"""UserAuthData
    User Authentication Data
    """
    
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    ad_config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adConfigId') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    must_change_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mustChangePassword') }})
    oid_config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidConfigId') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
