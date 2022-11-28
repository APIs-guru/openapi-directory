from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceCatalogProvisionedProductDetails:
    r"""ServiceCatalogProvisionedProductDetails
    Details of a provisioned service catalog product. For information about service catalog, see <a href=\"https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html\">What is Amazon Web Services Service Catalog</a>.
    """
    
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductId') }})
    provisioned_product_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductStatusMessage') }})
    
