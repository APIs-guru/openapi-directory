from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_accounting_domainwhitelistentry


@dataclass_json
@dataclass
class APICoreResponsesEntitiesResponseAPICoreDtoAccountingDomainWhitelistEntry:
    entities: Optional[List[api_core_dto_accounting_domainwhitelistentry.APICoreDtoAccountingDomainWhitelistEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
