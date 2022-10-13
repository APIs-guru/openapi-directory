from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import importyumartifactsgcssource


@dataclass_json
@dataclass
class ImportYumArtifactsRequest:
    gcs_source: Optional[importyumartifactsgcssource.ImportYumArtifactsGcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    
