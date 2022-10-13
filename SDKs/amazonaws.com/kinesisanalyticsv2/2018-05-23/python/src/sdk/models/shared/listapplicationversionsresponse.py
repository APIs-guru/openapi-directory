from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationversionsummary


@dataclass_json
@dataclass
class ListApplicationVersionsResponse:
    application_version_summaries: Optional[List[applicationversionsummary.ApplicationVersionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
