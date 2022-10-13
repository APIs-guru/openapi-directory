from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdataidentifiers
from . import sensitivedataitem
from . import classificationresultstatus


@dataclass_json
@dataclass
class ClassificationResult:
    additional_occurrences: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalOccurrences' }})
    custom_data_identifiers: Optional[customdataidentifiers.CustomDataIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDataIdentifiers' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    sensitive_data: Optional[List[sensitivedataitem.SensitiveDataItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitiveData' }})
    size_classified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeClassified' }})
    status: Optional[classificationresultstatus.ClassificationResultStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
