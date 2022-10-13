from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import domaindetails
from . import ipaddressdetails
from . import useridentity


@dataclass_json
@dataclass
class FindingActor:
    domain_details: Optional[domaindetails.DomainDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainDetails' }})
    ip_address_details: Optional[ipaddressdetails.IPAddressDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressDetails' }})
    user_identity: Optional[useridentity.UserIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userIdentity' }})
    
