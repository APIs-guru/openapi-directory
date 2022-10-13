from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import document


@dataclass_json
@dataclass
class AnalyzeExpenseRequest:
    document: document.Document = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Document' }})
    
