from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CaptureContentTypeHeader:
    r"""CaptureContentTypeHeader
    <p/>
    """
    
    csv_content_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvContentTypes') }})
    json_content_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonContentTypes') }})
    
