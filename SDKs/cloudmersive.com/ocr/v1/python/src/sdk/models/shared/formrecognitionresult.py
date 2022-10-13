from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fieldresult
from . import tableresult


@dataclass_json
@dataclass
class FormRecognitionResult:
    best_match_form_setting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BestMatchFormSettingName' }})
    diagnostics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Diagnostics' }})
    field_value_extraction_result: Optional[List[fieldresult.FieldResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldValueExtractionResult' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    table_value_extraction_results: Optional[List[tableresult.TableResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableValueExtractionResults' }})
    
