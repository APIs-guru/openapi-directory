from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassificationResult:
    r"""ClassificationResult
    Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
    """
    
    additional_occurrences: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalOccurrences') }})
    custom_data_identifiers: Optional[CustomDataIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDataIdentifiers') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    sensitive_data: Optional[List[SensitiveDataItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveData') }})
    size_classified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeClassified') }})
    status: Optional[ClassificationResultStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
