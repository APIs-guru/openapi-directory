from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScriptStackFrame:
    end_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endColumn') }})
    end_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endLine') }})
    procedure_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('procedureId') }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startColumn') }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startLine') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
