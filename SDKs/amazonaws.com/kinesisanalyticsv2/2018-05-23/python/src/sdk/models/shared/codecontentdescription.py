from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3applicationcodelocationdescription


@dataclass_json
@dataclass
class CodeContentDescription:
    code_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeMD5' }})
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSize' }})
    s3_application_code_location_description: Optional[s3applicationcodelocationdescription.S3ApplicationCodeLocationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ApplicationCodeLocationDescription' }})
    text_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextContent' }})
    
