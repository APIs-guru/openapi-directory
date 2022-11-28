from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ReferenceDataSource:
    r"""S3ReferenceDataSource
    <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
    """
    
    bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    
