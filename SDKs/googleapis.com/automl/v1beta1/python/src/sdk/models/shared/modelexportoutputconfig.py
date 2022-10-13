from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcrdestination
from . import gcsdestination


@dataclass_json
@dataclass
class ModelExportOutputConfig:
    gcr_destination: Optional[gcrdestination.GcrDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcrDestination' }})
    gcs_destination: Optional[gcsdestination.GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    model_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelFormat' }})
    params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    
