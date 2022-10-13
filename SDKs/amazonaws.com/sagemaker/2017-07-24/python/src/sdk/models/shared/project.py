from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import projectstatus_enum
from . import servicecatalogprovisionedproductdetails
from . import servicecatalogprovisioningdetails
from . import tag


@dataclass_json
@dataclass
class Project:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectArn' }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectDescription' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectId' }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectName' }})
    project_status: Optional[projectstatus_enum.ProjectStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectStatus' }})
    service_catalog_provisioned_product_details: Optional[servicecatalogprovisionedproductdetails.ServiceCatalogProvisionedProductDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCatalogProvisionedProductDetails' }})
    service_catalog_provisioning_details: Optional[servicecatalogprovisioningdetails.ServiceCatalogProvisioningDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCatalogProvisioningDetails' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
