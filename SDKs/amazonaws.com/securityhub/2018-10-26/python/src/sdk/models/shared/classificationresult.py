from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassificationResult:
    r"""ClassificationResult
    Details about the sensitive data that was detected on the resource.
    """
    
    additional_occurrences: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalOccurrences') }})
    custom_data_identifiers: Optional[CustomDataIdentifiersResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDataIdentifiers') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MimeType') }})
    sensitive_data: Optional[List[SensitiveDataResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SensitiveData') }})
    size_classified: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeClassified') }})
    status: Optional[ClassificationStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
