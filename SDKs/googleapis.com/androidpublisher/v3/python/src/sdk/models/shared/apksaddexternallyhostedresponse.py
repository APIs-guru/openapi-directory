from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import externallyhostedapk


@dataclass_json
@dataclass
class ApksAddExternallyHostedResponse:
    externally_hosted_apk: Optional[externallyhostedapk.ExternallyHostedApk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externallyHostedApk' }})
    
