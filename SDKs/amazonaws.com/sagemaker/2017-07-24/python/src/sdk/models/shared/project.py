from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Project:
    r"""Project
    The properties of a project as returned by the Search API.
    """
    
    created_by: Optional[UserContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectArn') }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectDescription') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectId') }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectName') }})
    project_status: Optional[ProjectStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectStatus') }})
    service_catalog_provisioned_product_details: Optional[ServiceCatalogProvisionedProductDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCatalogProvisionedProductDetails') }})
    service_catalog_provisioning_details: Optional[ServiceCatalogProvisioningDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCatalogProvisioningDetails') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
