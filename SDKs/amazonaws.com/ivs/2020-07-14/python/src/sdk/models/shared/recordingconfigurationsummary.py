from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecordingConfigurationSummary:
    r"""RecordingConfigurationSummary
    Summary information about a RecordingConfiguration.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    destination_configuration: DestinationConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConfiguration') }})
    state: RecordingConfigurationStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
