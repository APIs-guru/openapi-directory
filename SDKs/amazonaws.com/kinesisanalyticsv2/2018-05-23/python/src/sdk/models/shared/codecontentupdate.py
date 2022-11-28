from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeContentUpdate:
    r"""CodeContentUpdate
    Describes an update to the code of an application. Not supported for Apache Zeppelin.
    """
    
    s3_content_location_update: Optional[S3ContentLocationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocationUpdate') }})
    text_content_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextContentUpdate') }})
    zip_file_content_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFileContentUpdate') }})
    
