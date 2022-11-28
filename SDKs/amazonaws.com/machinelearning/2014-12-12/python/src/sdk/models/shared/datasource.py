from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSource:
    r"""DataSource
    <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
    """
    
    compute_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeStatistics') }})
    compute_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeTime') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by_iam_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedByIamUser') }})
    data_location_s3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLocationS3') }})
    data_rearrangement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRearrangement') }})
    data_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSizeInBytes') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    number_of_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfFiles') }})
    rds_metadata: Optional[RdsMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RDSMetadata') }})
    redshift_metadata: Optional[RedshiftMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftMetadata') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[EntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
