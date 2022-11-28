from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Segment:
    r"""Segment
    <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a href=\"https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html\">PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href=\"https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html\">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
    """
    
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Document') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
