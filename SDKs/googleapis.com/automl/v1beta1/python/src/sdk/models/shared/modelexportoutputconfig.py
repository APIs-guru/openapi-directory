from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelExportOutputConfig:
    r"""ModelExportOutputConfig
    Output configuration for ModelExport Action.
    """
    
    gcr_destination: Optional[GcrDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcrDestination') }})
    gcs_destination: Optional[GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    model_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelFormat') }})
    params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
