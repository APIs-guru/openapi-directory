from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ScalingConfigurationInfo:
    r"""ScalingConfigurationInfo
    <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html\">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
    """
    
    auto_pause: Optional[bool] = field(default=None)
    max_capacity: Optional[int] = field(default=None)
    min_capacity: Optional[int] = field(default=None)
    seconds_before_timeout: Optional[int] = field(default=None)
    seconds_until_auto_pause: Optional[int] = field(default=None)
    timeout_action: Optional[str] = field(default=None)
    
