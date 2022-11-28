from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SsmAutomation:
    r"""SsmAutomation
    Details about the Systems Manager automation document that will be used as a runbook during an incident.
    """
    
    document_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentVersion') }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    target_account: Optional[SsmTargetAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAccount') }})
    
