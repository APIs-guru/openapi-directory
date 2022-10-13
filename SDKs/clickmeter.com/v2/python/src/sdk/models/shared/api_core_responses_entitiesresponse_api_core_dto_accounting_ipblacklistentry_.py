from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_accounting_ipblacklistentry


@dataclass_json
@dataclass
class APICoreResponsesEntitiesResponseAPICoreDtoAccountingIPBlacklistEntry:
    entities: Optional[List[api_core_dto_accounting_ipblacklistentry.APICoreDtoAccountingIPBlacklistEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
