from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeScanningAnalysisDeletion:
    confirm_delete_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirm_delete_url' }})
    next_analysis_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_analysis_url' }})
    
