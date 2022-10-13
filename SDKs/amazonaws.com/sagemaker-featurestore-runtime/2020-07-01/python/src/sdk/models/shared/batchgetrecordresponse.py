from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchgetrecorderror
from . import batchgetrecordresultdetail
from . import batchgetrecordidentifier


@dataclass_json
@dataclass
class BatchGetRecordResponse:
    errors: List[batchgetrecorderror.BatchGetRecordError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    records: List[batchgetrecordresultdetail.BatchGetRecordResultDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    unprocessed_identifiers: List[batchgetrecordidentifier.BatchGetRecordIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedIdentifiers' }})
    
