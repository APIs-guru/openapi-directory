from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adwordsaccount
from . import webpropertyref


@dataclass_json
@dataclass
class EntityAdWordsLinkEntity:
    web_property_ref: Optional[webpropertyref.WebPropertyRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyRef' }})
    

@dataclass_json
@dataclass
class EntityAdWordsLink:
    ad_words_accounts: Optional[List[adwordsaccount.AdWordsAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adWordsAccounts' }})
    entity: Optional[EntityAdWordsLinkEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    profile_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileIds' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
