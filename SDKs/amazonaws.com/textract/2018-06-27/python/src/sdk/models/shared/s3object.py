from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Object:
    r"""S3Object
    <p>The S3 bucket name and file name that identifies the document.</p> <p>The AWS Region for the S3 bucket that contains the document must match the Region that you use for Amazon Textract operations.</p> <p>For Amazon Textract to process a file in an S3 bucket, the user must have permission to access the S3 bucket and file. </p>
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
