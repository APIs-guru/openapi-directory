from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class InsightRuleMetricDatapoint:
    r"""InsightRuleMetricDatapoint
    <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html\">GetInsightRuleReport</a>.</p>
    """
    
    timestamp: datetime = field()
    average: Optional[float] = field(default=None)
    max_contributor_value: Optional[float] = field(default=None)
    maximum: Optional[float] = field(default=None)
    minimum: Optional[float] = field(default=None)
    sample_count: Optional[float] = field(default=None)
    sum: Optional[float] = field(default=None)
    unique_contributors: Optional[float] = field(default=None)
    
