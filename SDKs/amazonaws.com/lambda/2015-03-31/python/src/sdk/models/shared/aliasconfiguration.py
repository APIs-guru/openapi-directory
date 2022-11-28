from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AliasConfiguration:
    r"""AliasConfiguration
    Provides configuration information about a Lambda function <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html\">alias</a>.
    """
    
    alias_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    function_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevisionId') }})
    routing_config: Optional[AliasRoutingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoutingConfig') }})
    
