from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductSyndicationProductEnum(str, Enum):
    SYNDICATION_PRODUCT_UNSPECIFIED = "SYNDICATION_PRODUCT_UNSPECIFIED"
    CONTENT = "CONTENT"
    MOBILE = "MOBILE"
    VIDEO = "VIDEO"
    GAMES = "GAMES"


@dataclass_json
@dataclass
class Product:
    r"""Product
    A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
    """
    
    available_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableEndTime') }})
    available_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableStartTime') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_contacts: Optional[List[ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorContacts') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    has_creator_signed_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasCreatorSignedOff') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    product_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRevision') }})
    publisher_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfileId') }})
    seller: Optional[Seller] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    syndication_product: Optional[ProductSyndicationProductEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syndicationProduct') }})
    targeting_criterion: Optional[List[TargetingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingCriterion') }})
    terms: Optional[DealTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyCode') }})
    
