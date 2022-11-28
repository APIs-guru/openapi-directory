from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeContentDescription:
    r"""CodeContentDescription
    Describes details about the code of a Kinesis Data Analytics application.
    """
    
    code_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeMD5') }})
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSize') }})
    s3_application_code_location_description: Optional[S3ApplicationCodeLocationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ApplicationCodeLocationDescription') }})
    text_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextContent') }})
    
