from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppPkgInfo:
    r"""AppPkgInfo
    'The data type AppPkgInfo represents the parameters for an application package resource'
    """
    
    links: AppPkgInfoLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_d_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDId') }})
    app_d_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDVersion') }})
    app_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appName') }})
    app_software_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appSoftwareVersion') }})
    checksum: Checksum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    onboarding_state: OnboardingStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardingState') }})
    operational_state: AppPkgOperationalStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationalState') }})
    software_images: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareImages') }})
    usage_state: UsageStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageState') }})
    additional_artifacts: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalArtifacts') }})
    app_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appProvider') }})
    user_defined_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedData') }})
    
