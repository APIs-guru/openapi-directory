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
class StartSupportDataExportRequest:
    r"""StartSupportDataExportRequest
    Container for the parameters to the StartSupportDataExport operation.
    """
    
    data_set_type: SupportDataSetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSetType') }})
    destination_s3_bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3BucketName') }})
    from_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_name_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleNameArn') }})
    sns_topic_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopicArn') }})
    customer_defined_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerDefinedValues') }})
    destination_s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3Prefix') }})
    
