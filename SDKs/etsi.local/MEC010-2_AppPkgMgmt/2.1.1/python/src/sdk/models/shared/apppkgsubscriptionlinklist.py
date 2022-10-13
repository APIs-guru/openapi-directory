from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import apppkgsubscriptionlinklist_links


@dataclass_json
@dataclass
class AppPkgSubscriptionLinkList:
    links: apppkgsubscriptionlinklist_links.AppPkgSubscriptionLinkListLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    
