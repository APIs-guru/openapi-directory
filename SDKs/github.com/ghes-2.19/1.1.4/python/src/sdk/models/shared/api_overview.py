from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIOverview:
    r"""APIOverview
    Api Overview
    """
    
    verifiable_password_authentication: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiable_password_authentication') }})
    dependabot: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependabot') }})
    github_services_sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github_services_sha') }})
    installed_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installed_version') }})
    packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    
