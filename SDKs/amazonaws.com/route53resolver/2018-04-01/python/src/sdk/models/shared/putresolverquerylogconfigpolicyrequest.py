from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutResolverQueryLogConfigPolicyRequest:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    resolver_query_log_config_policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfigPolicy') }})
    
