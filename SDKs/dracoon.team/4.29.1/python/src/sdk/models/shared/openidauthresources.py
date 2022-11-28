from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpenIDAuthResources:
    r"""OpenIDAuthResources
    List of OpenID Connect providers
    """
    
    open_id_providers: List[OpenIDProvider] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openIdProviders') }})
    
