from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricSource:
    r"""MetricSource
    Contains information about source data used to generate a metric.
    """
    
    app_flow_config: Optional[AppFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppFlowConfig') }})
    cloud_watch_config: Optional[CloudWatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchConfig') }})
    rds_source_config: Optional[RdsSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RDSSourceConfig') }})
    redshift_source_config: Optional[RedshiftSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftSourceConfig') }})
    s3_source_config: Optional[S3SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SourceConfig') }})
    
