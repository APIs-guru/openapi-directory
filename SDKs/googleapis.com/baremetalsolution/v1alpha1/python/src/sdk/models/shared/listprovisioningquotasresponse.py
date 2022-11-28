from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProvisioningQuotasResponse:
    r"""ListProvisioningQuotasResponse
    Response for ListProvisioningQuotas.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    provisioning_quotas: Optional[List[ProvisioningQuota]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningQuotas') }})
    
