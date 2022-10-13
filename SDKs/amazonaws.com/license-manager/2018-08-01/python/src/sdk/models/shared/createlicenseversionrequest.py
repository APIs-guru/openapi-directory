from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import consumptionconfiguration
from . import entitlement
from . import issuer
from . import metadata
from . import licensestatus_enum
from . import datetimerange


@dataclass_json
@dataclass
class CreateLicenseVersionRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    consumption_configuration: consumptionconfiguration.ConsumptionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumptionConfiguration' }})
    entitlements: List[entitlement.Entitlement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entitlements' }})
    home_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    issuer: issuer.Issuer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    license_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    license_metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseMetadata' }})
    license_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseName' }})
    product_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceVersion' }})
    status: licensestatus_enum.LicenseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    validity: datetimerange.DatetimeRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validity' }})
    
