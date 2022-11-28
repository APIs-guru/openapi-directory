from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Container:
    r"""Container
    Container runnable.
    """
    
    block_external_network: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockExternalNetwork') }})
    commands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    entrypoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    volumes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
