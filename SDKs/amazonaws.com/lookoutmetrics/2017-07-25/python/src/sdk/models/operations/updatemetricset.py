from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateMetricSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateMetricSetRequestBodyMetricSetFrequencyEnum(str, Enum):
    P1_D = "P1D"
    PT1_H = "PT1H"
    PT10_M = "PT10M"
    PT5_M = "PT5M"


@dataclass_json
@dataclass
class UpdateMetricSetRequestBodyMetricSource:
    r"""UpdateMetricSetRequestBodyMetricSource
    Contains information about source data used to generate a metric.
    """
    
    app_flow_config: Optional[shared.AppFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppFlowConfig') }})
    cloud_watch_config: Optional[shared.CloudWatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchConfig') }})
    rds_source_config: Optional[shared.RdsSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RDSSourceConfig') }})
    redshift_source_config: Optional[shared.RedshiftSourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftSourceConfig') }})
    s3_source_config: Optional[shared.S3SourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SourceConfig') }})
    

@dataclass_json
@dataclass
class UpdateMetricSetRequestBodyTimestampColumn:
    r"""UpdateMetricSetRequestBodyTimestampColumn
    Contains information about the column used to track time in a source data file.
    """
    
    column_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnFormat') }})
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnName') }})
    

@dataclass_json
@dataclass
class UpdateMetricSetRequestBody:
    metric_set_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetArn') }})
    dimension_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionList') }})
    metric_list: Optional[List[shared.Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricList') }})
    metric_set_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetDescription') }})
    metric_set_frequency: Optional[UpdateMetricSetRequestBodyMetricSetFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSetFrequency') }})
    metric_source: Optional[UpdateMetricSetRequestBodyMetricSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricSource') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offset') }})
    timestamp_column: Optional[UpdateMetricSetRequestBodyTimestampColumn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampColumn') }})
    

@dataclass
class UpdateMetricSetRequest:
    headers: UpdateMetricSetHeaders = field()
    request: UpdateMetricSetRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMetricSetResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_metric_set_response: Optional[shared.UpdateMetricSetResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
