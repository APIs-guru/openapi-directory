from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudassuredworkloadsv1beta1workloadkmssettings


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings:
    kms_settings: Optional[googlecloudassuredworkloadsv1beta1workloadkmssettings.GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsSettings' }})
    
