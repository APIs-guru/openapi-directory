from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ec2AmiResource:
    ami_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmiId' }})
    snowball_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballAmiId' }})
    
