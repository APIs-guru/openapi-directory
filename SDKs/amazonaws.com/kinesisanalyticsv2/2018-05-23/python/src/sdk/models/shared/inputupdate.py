from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputparallelismupdate
from . import inputprocessingconfigurationupdate
from . import inputschemaupdate
from . import kinesisfirehoseinputupdate
from . import kinesisstreamsinputupdate


@dataclass_json
@dataclass
class InputUpdate:
    input_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputId' }})
    input_parallelism_update: Optional[inputparallelismupdate.InputParallelismUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputParallelismUpdate' }})
    input_processing_configuration_update: Optional[inputprocessingconfigurationupdate.InputProcessingConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputProcessingConfigurationUpdate' }})
    input_schema_update: Optional[inputschemaupdate.InputSchemaUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputSchemaUpdate' }})
    kinesis_firehose_input_update: Optional[kinesisfirehoseinputupdate.KinesisFirehoseInputUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseInputUpdate' }})
    kinesis_streams_input_update: Optional[kinesisstreamsinputupdate.KinesisStreamsInputUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamsInputUpdate' }})
    name_prefix_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamePrefixUpdate' }})
    
