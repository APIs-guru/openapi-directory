from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Api2ModelsPersonal:
    r"""Api2ModelsPersonal
    Personal level info -- email, location, etc.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }, 'form': { 'field_name': 'Email' }})
    location: Optional[Api2ModelsLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }, 'form': { 'field_name': 'Location' }})
    
