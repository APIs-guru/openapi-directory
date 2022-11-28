from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManagedConfigurationTemplate:
    r"""ManagedConfigurationTemplate
    The managed configurations template for the app, saved from the managed configurations iframe.
    """
    
    configuration_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationVariables') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    
