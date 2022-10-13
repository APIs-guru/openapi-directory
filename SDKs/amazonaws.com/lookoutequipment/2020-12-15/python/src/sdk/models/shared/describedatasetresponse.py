from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ingestioninputconfiguration
from . import datasetstatus_enum


@dataclass_json
@dataclass
class DescribeDatasetResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    ingestion_input_configuration: Optional[ingestioninputconfiguration.IngestionInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IngestionInputConfiguration' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schema' }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideKmsKeyId' }})
    status: Optional[datasetstatus_enum.DatasetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
