from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import awssecurityfindingidentifier


@dataclass_json
@dataclass
class BatchUpdateFindingsUnprocessedFinding:
    error_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    finding_identifier: awssecurityfindingidentifier.AwsSecurityFindingIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FindingIdentifier' }})
    
