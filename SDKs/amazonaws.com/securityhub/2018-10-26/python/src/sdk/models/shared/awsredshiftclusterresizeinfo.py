from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRedshiftClusterResizeInfo:
    r"""AwsRedshiftClusterResizeInfo
    Information about the resize operation for the cluster.
    """
    
    allow_cancel_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowCancelResize') }})
    resize_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResizeType') }})
    
