from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Reference:
    r"""S3Reference
    <p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href=\"https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html\"> Updating message content with AWS Lambda</a>.</p> </note>
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    
