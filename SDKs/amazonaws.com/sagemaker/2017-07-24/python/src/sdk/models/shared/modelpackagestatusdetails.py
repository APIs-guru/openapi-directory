from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import modelpackagestatusitem
from . import modelpackagestatusitem


@dataclass_json
@dataclass
class ModelPackageStatusDetails:
    image_scan_statuses: Optional[List[modelpackagestatusitem.ModelPackageStatusItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageScanStatuses' }})
    validation_statuses: List[modelpackagestatusitem.ModelPackageStatusItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationStatuses' }})
    
