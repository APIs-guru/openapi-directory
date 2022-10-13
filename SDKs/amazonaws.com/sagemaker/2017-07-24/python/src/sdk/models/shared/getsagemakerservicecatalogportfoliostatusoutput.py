from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sagemakerservicecatalogstatus_enum


@dataclass_json
@dataclass
class GetSagemakerServicecatalogPortfolioStatusOutput:
    status: Optional[sagemakerservicecatalogstatus_enum.SagemakerServicecatalogStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
