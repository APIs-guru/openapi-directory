from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigNetflow:
    bundleflowsets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleflowsets' }})
    collector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collector' }})
    collectorport: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectorport' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    
