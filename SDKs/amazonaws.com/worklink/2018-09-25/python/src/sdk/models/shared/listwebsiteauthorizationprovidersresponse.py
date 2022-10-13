from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import websiteauthorizationprovidersummary


@dataclass_json
@dataclass
class ListWebsiteAuthorizationProvidersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    website_authorization_providers: Optional[List[websiteauthorizationprovidersummary.WebsiteAuthorizationProviderSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebsiteAuthorizationProviders' }})
    
