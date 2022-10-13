from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import apppkginfo_links
from . import checksum
from . import onboardingstate_enum
from . import apppkg_operationalstate_enum
from . import usagestate_enum


@dataclass_json
@dataclass
class AppPkgInfo:
    links: apppkginfo_links.AppPkgInfoLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    additional_artifacts: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalArtifacts' }})
    app_d_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appDId' }})
    app_d_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appDVersion' }})
    app_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appName' }})
    app_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appProvider' }})
    app_software_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appSoftwareVersion' }})
    checksum: checksum.Checksum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    onboarding_state: onboardingstate_enum.OnboardingStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onboardingState' }})
    operational_state: apppkg_operationalstate_enum.AppPkgOperationalStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationalState' }})
    software_images: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareImages' }})
    usage_state: usagestate_enum.UsageStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageState' }})
    user_defined_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefinedData' }})
    
