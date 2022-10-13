from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compressiontype_enum
from . import datasource
from . import traininginputmode_enum
from . import recordwrapper_enum
from . import shuffleconfig


@dataclass_json
@dataclass
class Channel:
    channel_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelName' }})
    compression_type: Optional[compressiontype_enum.CompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompressionType' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    data_source: datasource.DataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    input_mode: Optional[traininginputmode_enum.TrainingInputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputMode' }})
    record_wrapper_type: Optional[recordwrapper_enum.RecordWrapperEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordWrapperType' }})
    shuffle_config: Optional[shuffleconfig.ShuffleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShuffleConfig' }})
    
