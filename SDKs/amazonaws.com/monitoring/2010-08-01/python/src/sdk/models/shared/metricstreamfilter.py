from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MetricStreamFilter:
    r"""MetricStreamFilter
    This structure contains the name of one of the metric namespaces that is listed in a filter of a metric stream.
    """
    
    namespace: Optional[str] = field(default=None)
    
