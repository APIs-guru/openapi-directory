from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import videostatus_encoding
from . import videostatus_ingest


@dataclass_json
@dataclass
class Videostatus:
    encoding: Optional[videostatus_encoding.VideostatusEncoding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encoding' }})
    ingest: Optional[videostatus_ingest.VideostatusIngest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingest' }})
    
