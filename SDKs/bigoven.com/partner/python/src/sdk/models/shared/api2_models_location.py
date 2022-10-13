from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ModelsLocation:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'City' }, 'form': { 'field_name': 'City' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }, 'form': { 'field_name': 'Country' }})
    dma: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DMA' }, 'form': { 'field_name': 'DMA' }})
    
