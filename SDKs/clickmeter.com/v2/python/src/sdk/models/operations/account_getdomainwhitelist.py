from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetDomainWhitelistQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class AccountGetDomainWhitelistRequest:
    query_params: AccountGetDomainWhitelistQueryParams = field(default=None)
    

@dataclass
class AccountGetDomainWhitelistResponse:
    api_core_responses_entities_response_api_core_dto_accounting_domain_whitelist_entry_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAccountingDomainWhitelistEntry] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
