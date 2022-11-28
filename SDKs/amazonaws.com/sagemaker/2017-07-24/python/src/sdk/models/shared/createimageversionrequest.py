from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateImageVersionRequest:
    base_image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseImage') }})
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    image_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    
