from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationConfiguration:
    r"""OrganizationConfiguration
    Configuration information for AWS Organizations.
    """
    
    enable_integration: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableIntegration') }})
    
