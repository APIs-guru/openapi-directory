from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeContent:
    r"""CodeContent
    Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application. 
    """
    
    s3_content_location: Optional[S3ContentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocation') }})
    text_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextContent') }})
    zip_file_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFileContent') }})
    
