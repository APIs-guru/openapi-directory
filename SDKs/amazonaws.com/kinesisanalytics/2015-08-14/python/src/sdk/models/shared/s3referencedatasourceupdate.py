from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ReferenceDataSourceUpdate:
    r"""S3ReferenceDataSourceUpdate
    Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
    """
    
    bucket_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARNUpdate') }})
    file_key_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKeyUpdate') }})
    reference_role_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceRoleARNUpdate') }})
    
