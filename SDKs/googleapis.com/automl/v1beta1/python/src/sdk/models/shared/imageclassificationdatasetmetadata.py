from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ImageClassificationDatasetMetadataClassificationTypeEnum(str, Enum):
    CLASSIFICATION_TYPE_UNSPECIFIED = "CLASSIFICATION_TYPE_UNSPECIFIED"
    MULTICLASS = "MULTICLASS"
    MULTILABEL = "MULTILABEL"


@dataclass_json
@dataclass
class ImageClassificationDatasetMetadata:
    classification_type: Optional[ImageClassificationDatasetMetadataClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationType' }})
    
