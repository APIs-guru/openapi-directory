from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
    A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.
    """
    
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    
