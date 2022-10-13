from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stream


@dataclass_json
@dataclass
class ListStreamsOutput:
    last_evaluated_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedStreamArn' }})
    streams: Optional[List[stream.Stream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Streams' }})
    
