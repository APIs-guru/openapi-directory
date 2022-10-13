from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contactinformation
from . import seller
from . import targetingcriteria
from . import dealterms

class ProductSyndicationProductEnum(str, Enum):
    SYNDICATION_PRODUCT_UNSPECIFIED = "SYNDICATION_PRODUCT_UNSPECIFIED"
    CONTENT = "CONTENT"
    MOBILE = "MOBILE"
    VIDEO = "VIDEO"
    GAMES = "GAMES"


@dataclass_json
@dataclass
class Product:
    available_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableEndTime' }})
    available_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableStartTime' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorContacts' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    has_creator_signed_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasCreatorSignedOff' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    product_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productRevision' }})
    publisher_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProfileId' }})
    seller: Optional[seller.Seller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller' }})
    syndication_product: Optional[ProductSyndicationProductEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syndicationProduct' }})
    targeting_criterion: Optional[List[targetingcriteria.TargetingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingCriterion' }})
    terms: Optional[dealterms.DealTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyCode' }})
    
