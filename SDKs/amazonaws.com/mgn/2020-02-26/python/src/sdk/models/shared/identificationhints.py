from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentificationHints:
    r"""IdentificationHints
    Identification hints.
    """
    
    aws_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsInstanceID') }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fqdn') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    vm_ware_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmWareUuid') }})
    
