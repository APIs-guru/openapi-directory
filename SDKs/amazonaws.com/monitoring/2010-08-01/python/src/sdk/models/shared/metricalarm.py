from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class MetricAlarm:
    r"""MetricAlarm
    The details about a metric alarm.
    """
    
    actions_enabled: Optional[bool] = field(default=None)
    alarm_actions: Optional[List[str]] = field(default=None)
    alarm_arn: Optional[str] = field(default=None)
    alarm_configuration_updated_timestamp: Optional[datetime] = field(default=None)
    alarm_description: Optional[str] = field(default=None)
    alarm_name: Optional[str] = field(default=None)
    comparison_operator: Optional[ComparisonOperatorEnum] = field(default=None)
    datapoints_to_alarm: Optional[int] = field(default=None)
    dimensions: Optional[List[Dimension]] = field(default=None)
    evaluate_low_sample_count_percentile: Optional[str] = field(default=None)
    evaluation_periods: Optional[int] = field(default=None)
    extended_statistic: Optional[str] = field(default=None)
    insufficient_data_actions: Optional[List[str]] = field(default=None)
    metric_name: Optional[str] = field(default=None)
    metrics: Optional[List[MetricDataQuery]] = field(default=None)
    namespace: Optional[str] = field(default=None)
    ok_actions: Optional[List[str]] = field(default=None)
    period: Optional[int] = field(default=None)
    state_reason: Optional[str] = field(default=None)
    state_reason_data: Optional[str] = field(default=None)
    state_updated_timestamp: Optional[datetime] = field(default=None)
    state_value: Optional[StateValueEnum] = field(default=None)
    statistic: Optional[StatisticEnum] = field(default=None)
    threshold: Optional[float] = field(default=None)
    threshold_metric_id: Optional[str] = field(default=None)
    treat_missing_data: Optional[str] = field(default=None)
    unit: Optional[StandardUnitEnum] = field(default=None)
    
