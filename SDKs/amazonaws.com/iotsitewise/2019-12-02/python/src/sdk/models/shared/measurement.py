from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import measurementprocessingconfig


@dataclass_json
@dataclass
class Measurement:
    processing_config: Optional[measurementprocessingconfig.MeasurementProcessingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingConfig' }})
    
