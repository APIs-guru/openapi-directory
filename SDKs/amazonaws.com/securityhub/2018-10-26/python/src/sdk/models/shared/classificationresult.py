from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdataidentifiersresult
from . import sensitivedataresult
from . import classificationstatus


@dataclass_json
@dataclass
class ClassificationResult:
    additional_occurrences: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalOccurrences' }})
    custom_data_identifiers: Optional[customdataidentifiersresult.CustomDataIdentifiersResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDataIdentifiers' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MimeType' }})
    sensitive_data: Optional[List[sensitivedataresult.SensitiveDataResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SensitiveData' }})
    size_classified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeClassified' }})
    status: Optional[classificationstatus.ClassificationStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
