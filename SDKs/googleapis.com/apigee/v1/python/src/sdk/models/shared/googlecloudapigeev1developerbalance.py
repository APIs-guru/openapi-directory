from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1developerbalancewallet


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperBalance:
    wallets: Optional[List[googlecloudapigeev1developerbalancewallet.GoogleCloudApigeeV1DeveloperBalanceWallet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wallets' }})
    
