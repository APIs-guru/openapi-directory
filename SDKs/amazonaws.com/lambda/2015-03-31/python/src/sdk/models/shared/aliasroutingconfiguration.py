from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AliasRoutingConfiguration:
    r"""AliasRoutingConfiguration
    The <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html\">traffic-shifting</a> configuration of a Lambda function alias.
    """
    
    additional_version_weights: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalVersionWeights') }})
    
