from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionalpricemigrationconfig
from . import regionsversion


@dataclass_json
@dataclass
class MigrateBasePlanPricesRequest:
    regional_price_migrations: Optional[List[regionalpricemigrationconfig.RegionalPriceMigrationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalPriceMigrations' }})
    regions_version: Optional[regionsversion.RegionsVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionsVersion' }})
    
