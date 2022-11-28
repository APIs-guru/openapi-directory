from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Runbook:
    r"""Runbook
    <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note>
    """
    
    document_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentName') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrency') }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxErrors') }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    target_locations: Optional[List[TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLocations') }})
    target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetParameterName') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
