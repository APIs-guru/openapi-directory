from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import importaptartifactsgcssource


@dataclass_json
@dataclass
class ImportAptArtifactsRequest:
    gcs_source: Optional[importaptartifactsgcssource.ImportAptArtifactsGcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    
