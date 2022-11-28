from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ingress:
    r"""Ingress
    Settings of how to connect to the ClientGateway. One of the following options should be set.
    """
    
    config: Optional[Config] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    
