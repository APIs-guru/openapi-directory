from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricPolicyRule:
    r"""MetricPolicyRule
    A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href=\"https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas\">request a quota increase</a> to allow up to 300 rules per policy.
    """
    
    object_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectGroup') }})
    object_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectGroupName') }})
    
