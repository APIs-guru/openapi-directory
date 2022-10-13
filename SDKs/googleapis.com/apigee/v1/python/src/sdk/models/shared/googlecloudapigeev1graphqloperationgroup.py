from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1graphqloperationconfig


@dataclass_json
@dataclass
class GoogleCloudApigeeV1GraphQlOperationGroup:
    operation_config_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationConfigType' }})
    operation_configs: Optional[List[googlecloudapigeev1graphqloperationconfig.GoogleCloudApigeeV1GraphQlOperationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationConfigs' }})
    
