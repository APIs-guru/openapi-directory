from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse:
    instance_config: Optional[googlecloudbeyondcorpappconnectorsv1appconnectorinstanceconfig.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfig' }})
    
