from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Shipment:
    r"""Shipment
    This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
    """
    
    cancellation: Optional[ShipmentCancellation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellation') }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    label_custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelCustomMessage') }})
    label_download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDownloadUrl') }})
    label_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelSize') }})
    orders: Optional[List[Order]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    package_specification: Optional[PackageSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageSpecification') }})
    rate: Optional[PurchasedRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    return_to: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnTo') }})
    ship_from: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipFrom') }})
    ship_to: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipTo') }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    shipment_tracking_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentTrackingNumber') }})
    
