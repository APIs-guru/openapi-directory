from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FormRecognitionResult:
    r"""FormRecognitionResult
    The result of extracting form field values
    """
    
    best_match_form_setting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BestMatchFormSettingName') }})
    diagnostics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Diagnostics') }})
    field_value_extraction_result: Optional[List[FieldResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldValueExtractionResult') }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    table_value_extraction_results: Optional[List[TableResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableValueExtractionResults') }})
    
