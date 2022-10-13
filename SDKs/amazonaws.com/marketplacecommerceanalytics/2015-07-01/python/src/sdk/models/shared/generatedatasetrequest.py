from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasettype_enum


@dataclass_json
@dataclass
class GenerateDataSetRequest:
    customer_defined_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerDefinedValues' }})
    data_set_publication_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSetPublicationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_set_type: datasettype_enum.DataSetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSetType' }})
    destination_s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3BucketName' }})
    destination_s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3Prefix' }})
    role_name_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleNameArn' }})
    sns_topic_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsTopicArn' }})
    
