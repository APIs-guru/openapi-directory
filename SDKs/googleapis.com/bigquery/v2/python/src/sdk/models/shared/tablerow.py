from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablecell


@dataclass_json
@dataclass
class TableRow:
    f: Optional[List[tablecell.TableCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f' }})
    
