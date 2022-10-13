from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TextClassificationModelMetadataClassificationTypeEnum(str, Enum):
    CLASSIFICATION_TYPE_UNSPECIFIED = "CLASSIFICATION_TYPE_UNSPECIFIED"
    MULTICLASS = "MULTICLASS"
    MULTILABEL = "MULTILABEL"


@dataclass_json
@dataclass
class TextClassificationModelMetadata:
    classification_type: Optional[TextClassificationModelMetadataClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationType' }})
    
