from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CheckAnnotation:
    r"""CheckAnnotation
    Check Annotation
    """
    
    annotation_level: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation_level') }})
    blob_href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_href') }})
    end_column: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_column') }})
    end_line: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_line') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    raw_details: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_details') }})
    start_column: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_column') }})
    start_line: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
