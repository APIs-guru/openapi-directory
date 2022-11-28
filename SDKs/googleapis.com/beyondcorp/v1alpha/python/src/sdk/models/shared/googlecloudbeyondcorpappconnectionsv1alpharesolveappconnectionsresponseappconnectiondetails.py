from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails:
    r"""GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails
    Details of the AppConnection.
    """
    
    app_connection: Optional[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appConnection') }})
    recent_mig_vms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentMigVms') }})
    
