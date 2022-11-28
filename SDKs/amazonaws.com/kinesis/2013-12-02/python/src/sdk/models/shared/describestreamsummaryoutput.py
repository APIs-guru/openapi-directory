from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeStreamSummaryOutput:
    stream_description_summary: StreamDescriptionSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamDescriptionSummary') }})
    
