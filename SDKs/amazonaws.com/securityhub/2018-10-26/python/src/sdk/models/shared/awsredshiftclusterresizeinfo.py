from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterResizeInfo:
    allow_cancel_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowCancelResize' }})
    resize_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResizeType' }})
    
