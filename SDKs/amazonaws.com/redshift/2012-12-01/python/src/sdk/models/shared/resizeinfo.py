from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResizeInfo:
    r"""ResizeInfo
    Describes a resize operation.
    """
    
    allow_cancel_resize: Optional[bool] = field(default=None)
    resize_type: Optional[str] = field(default=None)
    
