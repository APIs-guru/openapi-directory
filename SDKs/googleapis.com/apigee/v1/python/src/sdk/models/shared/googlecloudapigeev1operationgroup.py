from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1operationconfig


@dataclass_json
@dataclass
class GoogleCloudApigeeV1OperationGroup:
    operation_config_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationConfigType' }})
    operation_configs: Optional[List[googlecloudapigeev1operationconfig.GoogleCloudApigeeV1OperationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationConfigs' }})
    
