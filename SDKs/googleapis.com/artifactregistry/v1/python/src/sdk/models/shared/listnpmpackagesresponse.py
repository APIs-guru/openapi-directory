from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNpmPackagesResponse:
    r"""ListNpmPackagesResponse
    The response from listing npm packages.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    npm_packages: Optional[List[NpmPackage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('npmPackages') }})
    
