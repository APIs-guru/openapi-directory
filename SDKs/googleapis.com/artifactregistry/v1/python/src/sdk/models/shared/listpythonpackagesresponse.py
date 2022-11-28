from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPythonPackagesResponse:
    r"""ListPythonPackagesResponse
    The response from listing python packages.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    python_packages: Optional[List[PythonPackage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonPackages') }})
    
