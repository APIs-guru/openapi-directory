from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Configuration:
    r"""S3Configuration
    For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    
