from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import indtaxdocuments


@dataclass_json
@dataclass
class TaxDocuments:
    ind: Optional[indtaxdocuments.IndTaxDocuments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IND' }})
    
