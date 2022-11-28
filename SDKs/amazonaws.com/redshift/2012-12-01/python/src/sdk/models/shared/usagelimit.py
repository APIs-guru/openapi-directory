from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class UsageLimit:
    r"""UsageLimit
    Describes a usage limit object for a cluster. 
    """
    
    amount: Optional[int] = field(default=None)
    breach_action: Optional[UsageLimitBreachActionEnum] = field(default=None)
    cluster_identifier: Optional[str] = field(default=None)
    feature_type: Optional[UsageLimitFeatureTypeEnum] = field(default=None)
    limit_type: Optional[UsageLimitLimitTypeEnum] = field(default=None)
    period: Optional[UsageLimitPeriodEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    usage_limit_id: Optional[str] = field(default=None)
    
