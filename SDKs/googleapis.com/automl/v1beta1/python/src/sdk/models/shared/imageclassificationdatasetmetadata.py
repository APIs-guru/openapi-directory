from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImageClassificationDatasetMetadataClassificationTypeEnum(str, Enum):
    CLASSIFICATION_TYPE_UNSPECIFIED = "CLASSIFICATION_TYPE_UNSPECIFIED"
    MULTICLASS = "MULTICLASS"
    MULTILABEL = "MULTILABEL"


@dataclass_json
@dataclass
class ImageClassificationDatasetMetadata:
    r"""ImageClassificationDatasetMetadata
    Dataset metadata that is specific to image classification.
    """
    
    classification_type: Optional[ImageClassificationDatasetMetadataClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationType') }})
    
