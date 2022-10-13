from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pythonpackage


@dataclass_json
@dataclass
class ListPythonPackagesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    python_packages: Optional[List[pythonpackage.PythonPackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonPackages' }})
    
