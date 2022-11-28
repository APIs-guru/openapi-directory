from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ReferenceDataSource:
    r"""S3ReferenceDataSource
    <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html\">UpdateApplication</a> operation to trigger reloading of data into your application.</p>
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    reference_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceRoleARN') }})
    
