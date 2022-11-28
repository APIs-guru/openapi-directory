from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelBiasAppSpecification:
    r"""ModelBiasAppSpecification
    Docker container image configuration object for the model bias job.
    """
    
    config_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigUri') }})
    image_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUri') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    
