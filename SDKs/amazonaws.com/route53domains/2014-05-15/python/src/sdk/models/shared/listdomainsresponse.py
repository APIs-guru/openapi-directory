from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDomainsResponse:
    r"""ListDomainsResponse
    The ListDomains response includes the following elements.
    """
    
    domains: List[DomainSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    next_page_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageMarker') }})
    
