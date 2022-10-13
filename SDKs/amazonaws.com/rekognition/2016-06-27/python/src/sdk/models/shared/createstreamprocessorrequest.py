from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streamprocessorinput
from . import streamprocessoroutput
from . import streamprocessorsettings


@dataclass_json
@dataclass
class CreateStreamProcessorRequest:
    input: streamprocessorinput.StreamProcessorInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output: streamprocessoroutput.StreamProcessorOutput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    settings: streamprocessorsettings.StreamProcessorSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
