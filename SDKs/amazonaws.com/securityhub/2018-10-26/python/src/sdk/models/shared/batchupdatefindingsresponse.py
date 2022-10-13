from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import awssecurityfindingidentifier
from . import batchupdatefindingsunprocessedfinding


@dataclass_json
@dataclass
class BatchUpdateFindingsResponse:
    processed_findings: List[awssecurityfindingidentifier.AwsSecurityFindingIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessedFindings' }})
    unprocessed_findings: List[batchupdatefindingsunprocessedfinding.BatchUpdateFindingsUnprocessedFinding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedFindings' }})
    
