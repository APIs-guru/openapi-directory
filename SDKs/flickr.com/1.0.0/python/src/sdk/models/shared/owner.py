from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Owner:
    iconfarm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconfarm') }})
    iconserver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconserver') }})
    is_ad_free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_ad_free') }})
    ispro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ispro') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    noindexfollow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noindexfollow') }})
    nsid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsid') }})
    path_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path_alias') }})
    realname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realname') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
