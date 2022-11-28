from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ListingCategoriesEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    CATEGORY_OTHERS = "CATEGORY_OTHERS"
    CATEGORY_ADVERTISING_AND_MARKETING = "CATEGORY_ADVERTISING_AND_MARKETING"
    CATEGORY_COMMERCE = "CATEGORY_COMMERCE"
    CATEGORY_CLIMATE_AND_ENVIRONMENT = "CATEGORY_CLIMATE_AND_ENVIRONMENT"
    CATEGORY_DEMOGRAPHICS = "CATEGORY_DEMOGRAPHICS"
    CATEGORY_ECONOMICS = "CATEGORY_ECONOMICS"
    CATEGORY_EDUCATION = "CATEGORY_EDUCATION"
    CATEGORY_ENERGY = "CATEGORY_ENERGY"
    CATEGORY_FINANCIAL = "CATEGORY_FINANCIAL"
    CATEGORY_GAMING = "CATEGORY_GAMING"
    CATEGORY_GEOSPATIAL = "CATEGORY_GEOSPATIAL"
    CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE = "CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE"
    CATEGORY_MEDIA = "CATEGORY_MEDIA"
    CATEGORY_PUBLIC_SECTOR = "CATEGORY_PUBLIC_SECTOR"
    CATEGORY_RETAIL = "CATEGORY_RETAIL"
    CATEGORY_SPORTS = "CATEGORY_SPORTS"
    CATEGORY_SCIENCE_AND_RESEARCH = "CATEGORY_SCIENCE_AND_RESEARCH"
    CATEGORY_TRANSPORTATION_AND_LOGISTICS = "CATEGORY_TRANSPORTATION_AND_LOGISTICS"
    CATEGORY_TRAVEL_AND_TOURISM = "CATEGORY_TRAVEL_AND_TOURISM"

class ListingStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class ListingInput:
    r"""ListingInput
    A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
    """
    
    bigquery_dataset: Optional[BigQueryDatasetSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDataset') }})
    categories: Optional[List[ListingCategoriesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    data_provider: Optional[DataProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProvider') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    documentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    primary_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContact') }})
    publisher: Optional[Publisher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    request_access: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestAccess') }})
    

@dataclass_json
@dataclass
class Listing:
    r"""Listing
    A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
    """
    
    bigquery_dataset: Optional[BigQueryDatasetSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDataset') }})
    categories: Optional[List[ListingCategoriesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    data_provider: Optional[DataProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProvider') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    documentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContact') }})
    publisher: Optional[Publisher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    request_access: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestAccess') }})
    state: Optional[ListingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
