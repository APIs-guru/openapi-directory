from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import appflowconfig
from . import cloudwatchconfig
from . import rdssourceconfig
from . import redshiftsourceconfig
from . import s3sourceconfig


@dataclass_json
@dataclass
class MetricSource:
    app_flow_config: Optional[appflowconfig.AppFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppFlowConfig' }})
    cloud_watch_config: Optional[cloudwatchconfig.CloudWatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchConfig' }})
    rds_source_config: Optional[rdssourceconfig.RdsSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RDSSourceConfig' }})
    redshift_source_config: Optional[redshiftsourceconfig.RedshiftSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftSourceConfig' }})
    s3_source_config: Optional[s3sourceconfig.S3SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3SourceConfig' }})
    
