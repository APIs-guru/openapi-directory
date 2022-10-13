from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rdsmetadata
from . import redshiftmetadata
from . import entitystatus_enum


@dataclass_json
@dataclass
class DataSource:
    compute_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeStatistics' }})
    compute_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeTime' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by_iam_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedByIamUser' }})
    data_location_s3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataLocationS3' }})
    data_rearrangement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRearrangement' }})
    data_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSizeInBytes' }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceId' }})
    finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number_of_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfFiles' }})
    rds_metadata: Optional[rdsmetadata.RdsMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RDSMetadata' }})
    redshift_metadata: Optional[redshiftmetadata.RedshiftMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftMetadata' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[entitystatus_enum.EntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
