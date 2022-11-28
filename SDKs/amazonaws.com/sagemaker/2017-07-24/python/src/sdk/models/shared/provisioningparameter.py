from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisioningParameter:
    r"""ProvisioningParameter
    A key value pair used when you provision a project as a service catalog product. For information, see <a href=\"https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html\">What is Amazon Web Services Service Catalog</a>.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
