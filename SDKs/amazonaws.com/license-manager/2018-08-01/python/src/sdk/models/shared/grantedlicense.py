from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import consumptionconfiguration
from . import entitlement
from . import issuerdetails
from . import metadata
from . import receivedmetadata
from . import licensestatus_enum
from . import datetimerange


@dataclass_json
@dataclass
class GrantedLicense:
    beneficiary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Beneficiary' }})
    consumption_configuration: Optional[consumptionconfiguration.ConsumptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumptionConfiguration' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime' }})
    entitlements: Optional[List[entitlement.Entitlement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entitlements' }})
    home_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    issuer: Optional[issuerdetails.IssuerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    license_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    license_metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseMetadata' }})
    license_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseName' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    product_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductSKU' }})
    received_metadata: Optional[receivedmetadata.ReceivedMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceivedMetadata' }})
    status: Optional[licensestatus_enum.LicenseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    validity: Optional[datetimerange.DatetimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validity' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
