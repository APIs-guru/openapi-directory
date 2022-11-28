from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MigrateBasePlanPricesRequest:
    r"""MigrateBasePlanPricesRequest
    Request message for MigrateBasePlanPrices.
    """
    
    regional_price_migrations: Optional[List[RegionalPriceMigrationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalPriceMigrations') }})
    regions_version: Optional[RegionsVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionsVersion') }})
    
