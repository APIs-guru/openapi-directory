from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1nataddress


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListNatAddressesResponse:
    nat_addresses: Optional[List[googlecloudapigeev1nataddress.GoogleCloudApigeeV1NatAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'natAddresses' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
