from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image
from . import protectiveequipmentsummarizationattributes


@dataclass_json
@dataclass
class DetectProtectiveEquipmentRequest:
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    summarization_attributes: Optional[protectiveequipmentsummarizationattributes.ProtectiveEquipmentSummarizationAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SummarizationAttributes' }})
    
