from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import algorithmstatusitem
from . import algorithmstatusitem


@dataclass_json
@dataclass
class AlgorithmStatusDetails:
    image_scan_statuses: Optional[List[algorithmstatusitem.AlgorithmStatusItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageScanStatuses' }})
    validation_statuses: Optional[List[algorithmstatusitem.AlgorithmStatusItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationStatuses' }})
    
