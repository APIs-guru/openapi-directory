from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleGroup:
    r"""RuleGroup
    <p>The object that defines the rules in a rule group. This, along with <a>RuleGroupResponse</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. </p> <p>AWS Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow. </p> <p>To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall. </p>
    """
    
    rules_source: RulesSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RulesSource') }})
    rule_variables: Optional[RuleVariables] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleVariables') }})
    
