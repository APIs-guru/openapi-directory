from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadataheader
from . import metadatarecord


@dataclass_json
@dataclass
class Metadata:
    metadata_header: Optional[metadataheader.MetadataHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataHeader' }})
    metadata_records: Optional[List[metadatarecord.MetadataRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataRecords' }})
    
