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
    For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. 
    """
    
    bucket_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARNUpdate') }})
    file_key_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKeyUpdate') }})
    
