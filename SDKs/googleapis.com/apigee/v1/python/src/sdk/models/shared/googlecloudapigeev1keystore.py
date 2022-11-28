from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Keystore:
    r"""GoogleCloudApigeeV1Keystore
    Datastore for Certificates and Aliases.
    """
    
    aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1KeystoreInput:
    r"""GoogleCloudApigeeV1KeystoreInput
    Datastore for Certificates and Aliases.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
