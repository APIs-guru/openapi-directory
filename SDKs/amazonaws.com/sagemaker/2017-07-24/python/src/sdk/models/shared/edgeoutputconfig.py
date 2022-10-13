from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import edgepresetdeploymenttype_enum


@dataclass_json
@dataclass
class EdgeOutputConfig:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    preset_deployment_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PresetDeploymentConfig' }})
    preset_deployment_type: Optional[edgepresetdeploymenttype_enum.EdgePresetDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PresetDeploymentType' }})
    s3_output_location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputLocation' }})
    
