from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceCatalogProvisioningDetails:
    r"""ServiceCatalogProvisioningDetails
    Details that you specify to provision a service catalog product. For information about service catalog, see <a href=\"https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html\">What is Amazon Web Services Service Catalog</a>.
    """
    
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioning_artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathId') }})
    provisioning_parameters: Optional[List[ProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningParameters') }})
    
