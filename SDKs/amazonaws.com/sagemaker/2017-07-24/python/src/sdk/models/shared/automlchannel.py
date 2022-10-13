from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compressiontype_enum
from . import automldatasource


@dataclass_json
@dataclass
class AutoMlChannel:
    compression_type: Optional[compressiontype_enum.CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompressionType' }})
    data_source: automldatasource.AutoMlDataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    target_attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetAttributeName' }})
    
