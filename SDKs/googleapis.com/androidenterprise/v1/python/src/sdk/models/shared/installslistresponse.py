from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import install


@dataclass_json
@dataclass
class InstallsListResponse:
    install: Optional[List[install.Install]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'install' }})
    
