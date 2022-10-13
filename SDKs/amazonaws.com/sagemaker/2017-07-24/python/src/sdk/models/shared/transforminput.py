from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compressiontype_enum
from . import transformdatasource
from . import splittype_enum


@dataclass_json
@dataclass
class TransformInput:
    compression_type: Optional[compressiontype_enum.CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompressionType' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    data_source: transformdatasource.TransformDataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    split_type: Optional[splittype_enum.SplitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SplitType' }})
    
