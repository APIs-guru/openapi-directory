from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeNotebookInstanceInput:
    notebook_instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceName' }})
    
