from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1alphaappconnectorinstanceconfig


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse:
    instance_config: Optional[googlecloudbeyondcorpappconnectorsv1alphaappconnectorinstanceconfig.GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfig' }})
    
