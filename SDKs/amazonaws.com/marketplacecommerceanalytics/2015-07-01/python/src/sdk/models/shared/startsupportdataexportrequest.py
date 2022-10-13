from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import supportdatasettype_enum


@dataclass_json
@dataclass
class StartSupportDataExportRequest:
    customer_defined_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerDefinedValues' }})
    data_set_type: supportdatasettype_enum.SupportDataSetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSetType' }})
    destination_s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3BucketName' }})
    destination_s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3Prefix' }})
    from_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_name_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleNameArn' }})
    sns_topic_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsTopicArn' }})
    
