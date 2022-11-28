from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1GraphQlOperationGroup:
    r"""GoogleCloudApigeeV1GraphQlOperationGroup
    List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
    """
    
    operation_config_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationConfigType') }})
    operation_configs: Optional[List[GoogleCloudApigeeV1GraphQlOperationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationConfigs') }})
    
