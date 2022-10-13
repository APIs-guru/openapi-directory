from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoption
from . import input
from . import output
from . import tag


@dataclass_json
@dataclass
class CreateApplicationRequest:
    application_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationCode' }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationDescription' }})
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    cloud_watch_logging_options: Optional[List[cloudwatchloggingoption.CloudWatchLoggingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    inputs: Optional[List[input.Input]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inputs' }})
    outputs: Optional[List[output.Output]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
