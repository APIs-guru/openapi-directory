from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EdgeModelSummary:
    r"""EdgeModelSummary
    Summary of model on edge device.
    """
    
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    model_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    
