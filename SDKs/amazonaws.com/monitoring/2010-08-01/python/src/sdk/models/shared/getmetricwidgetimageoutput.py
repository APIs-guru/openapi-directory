from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMetricWidgetImageOutput:
    metric_widget_image: Optional[str] = field(default=None)
    
