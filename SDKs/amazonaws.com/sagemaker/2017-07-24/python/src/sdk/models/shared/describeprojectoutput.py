from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeProjectOutput:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectArn') }})
    project_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectId') }})
    project_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectName') }})
    project_status: ProjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectStatus') }})
    service_catalog_provisioning_details: ServiceCatalogProvisioningDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCatalogProvisioningDetails') }})
    created_by: Optional[UserContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectDescription') }})
    service_catalog_provisioned_product_details: Optional[ServiceCatalogProvisionedProductDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCatalogProvisionedProductDetails') }})
    
