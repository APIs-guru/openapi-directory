from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import npmpackage


@dataclass_json
@dataclass
class ListNpmPackagesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    npm_packages: Optional[List[npmpackage.NpmPackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'npmPackages' }})
    
