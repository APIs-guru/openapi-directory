from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appvalidationstrategy_enum
from . import ssmvalidationparameters


@dataclass_json
@dataclass
class AppValidationConfiguration:
    app_validation_strategy: Optional[appvalidationstrategy_enum.AppValidationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appValidationStrategy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ssm_validation_parameters: Optional[ssmvalidationparameters.SsmValidationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssmValidationParameters' }})
    validation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationId' }})
    
