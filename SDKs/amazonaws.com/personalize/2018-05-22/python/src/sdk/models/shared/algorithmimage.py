from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AlgorithmImage:
    r"""AlgorithmImage
    Describes an algorithm image.
    """
    
    docker_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerURI') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
