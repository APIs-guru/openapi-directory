from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDomainMappingsResponse:
    r"""ListDomainMappingsResponse
    Response message for DomainMappings.ListDomainMappings.
    """
    
    domain_mappings: Optional[List[DomainMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMappings') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
