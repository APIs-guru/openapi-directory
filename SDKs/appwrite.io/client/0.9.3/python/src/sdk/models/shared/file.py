from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class File:
    r"""File
    File
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    dollar_permissions: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$permissions') }})
    date_created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    mime_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    signature: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    size_original: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeOriginal') }})
    
