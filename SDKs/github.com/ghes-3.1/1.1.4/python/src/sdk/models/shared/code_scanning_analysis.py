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
class CodeScanningAnalysis:
    analysis_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysis_key') }})
    commit_sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_sha') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deletable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletable') }})
    environment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    error: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    results_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results_count') }})
    rules_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules_count') }})
    sarif_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sarif_id') }})
    tool: CodeScanningAnalysisTool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tool') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    warning: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    
