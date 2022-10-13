from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicecatalogprovisioningdetails
from . import tag


@dataclass_json
@dataclass
class CreateProjectInput:
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectDescription' }})
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectName' }})
    service_catalog_provisioning_details: servicecatalogprovisioningdetails.ServiceCatalogProvisioningDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCatalogProvisioningDetails' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
