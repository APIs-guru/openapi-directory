from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import streamdescriptionsummary


@dataclass_json
@dataclass
class DescribeStreamSummaryOutput:
    stream_description_summary: streamdescriptionsummary.StreamDescriptionSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamDescriptionSummary' }})
    
