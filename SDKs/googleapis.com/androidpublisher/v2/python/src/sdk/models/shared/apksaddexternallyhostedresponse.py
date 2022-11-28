from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ApksAddExternallyHostedResponse:
    externally_hosted_apk: Optional[ExternallyHostedApk] = field(default=None)
    
