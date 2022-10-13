from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentmetadata
from . import expensedocument


@dataclass_json
@dataclass
class AnalyzeExpenseResponse:
    document_metadata: Optional[documentmetadata.DocumentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentMetadata' }})
    expense_documents: Optional[List[expensedocument.ExpenseDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpenseDocuments' }})
    
