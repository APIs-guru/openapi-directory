from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import importsummary


@dataclass_json
@dataclass
class ListImportsResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    import_summaries: Optional[List[importsummary.ImportSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
