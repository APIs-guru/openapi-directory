from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppSpecification:
    r"""AppSpecification
    Configuration to run a processing job in a specified container image.
    """
    
    image_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUri') }})
    container_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerArguments') }})
    container_entrypoint: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerEntrypoint') }})
    
