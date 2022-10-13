from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchgetcustomdataidentifiersummary


@dataclass_json
@dataclass
class BatchGetCustomDataIdentifiersResponse:
    custom_data_identifiers: Optional[List[batchgetcustomdataidentifiersummary.BatchGetCustomDataIdentifierSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDataIdentifiers' }})
    not_found_identifier_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notFoundIdentifierIds' }})
    
