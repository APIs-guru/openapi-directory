from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityAdWordsLinkEntity:
    r"""EntityAdWordsLinkEntity
    Web property being linked.
    """
    
    web_property_ref: Optional[WebPropertyRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyRef') }})
    

@dataclass_json
@dataclass
class EntityAdWordsLink:
    r"""EntityAdWordsLink
    JSON template for Analytics Entity Google Ads Link.
    """
    
    ad_words_accounts: Optional[List[AdWordsAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsAccounts') }})
    entity: Optional[EntityAdWordsLinkEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileIds') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    
