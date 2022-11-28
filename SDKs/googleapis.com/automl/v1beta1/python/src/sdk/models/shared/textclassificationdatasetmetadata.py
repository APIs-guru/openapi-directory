from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TextClassificationDatasetMetadataClassificationTypeEnum(str, Enum):
    CLASSIFICATION_TYPE_UNSPECIFIED = "CLASSIFICATION_TYPE_UNSPECIFIED"
    MULTICLASS = "MULTICLASS"
    MULTILABEL = "MULTILABEL"


@dataclass_json
@dataclass
class TextClassificationDatasetMetadata:
    r"""TextClassificationDatasetMetadata
    Dataset metadata for classification.
    """
    
    classification_type: Optional[TextClassificationDatasetMetadataClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationType') }})
    
