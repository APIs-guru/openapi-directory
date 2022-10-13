from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateMetricSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateMetricSetRequestBodyMetricSetFrequencyEnum(str, Enum):
    P1_D = "P1D"
    PT1_H = "PT1H"
    PT10_M = "PT10M"
    PT5_M = "PT5M"


@dataclass_json
@dataclass
class CreateMetricSetRequestBodyMetricSource:
    app_flow_config: Optional[shared.AppFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppFlowConfig' }})
    cloud_watch_config: Optional[shared.CloudWatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchConfig' }})
    rds_source_config: Optional[shared.RdsSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RDSSourceConfig' }})
    redshift_source_config: Optional[shared.RedshiftSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftSourceConfig' }})
    s3_source_config: Optional[shared.S3SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3SourceConfig' }})
    

@dataclass_json
@dataclass
class CreateMetricSetRequestBodyTimestampColumn:
    column_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnFormat' }})
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnName' }})
    

@dataclass_json
@dataclass
class CreateMetricSetRequestBody:
    anomaly_detector_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyDetectorArn' }})
    dimension_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionList' }})
    metric_list: List[shared.Metric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricList' }})
    metric_set_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetDescription' }})
    metric_set_frequency: Optional[CreateMetricSetRequestBodyMetricSetFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetFrequency' }})
    metric_set_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSetName' }})
    metric_source: CreateMetricSetRequestBodyMetricSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricSource' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Offset' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    timestamp_column: Optional[CreateMetricSetRequestBodyTimestampColumn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampColumn' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    

@dataclass
class CreateMetricSetRequest:
    headers: CreateMetricSetHeaders = field(default=None)
    request: CreateMetricSetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMetricSetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_metric_set_response: Optional[shared.CreateMetricSetResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
