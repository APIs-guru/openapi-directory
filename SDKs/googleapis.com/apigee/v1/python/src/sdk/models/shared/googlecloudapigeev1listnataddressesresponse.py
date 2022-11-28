from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListNatAddressesResponse:
    r"""GoogleCloudApigeeV1ListNatAddressesResponse
    Response for ListNatAddresses.
    """
    
    nat_addresses: Optional[List[GoogleCloudApigeeV1NatAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('natAddresses') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
