from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomAction:
    r"""CustomAction
    <p>An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify. </p> <p>You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings. </p> <p>You can use custom actions in the following places: </p> <ul> <li> <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification. The custom actions are available for use by name inside the <code>StatelessRulesAndCustomActions</code> where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes. </p> </li> <li> <p>In a <a>FirewallPolicy</a> specification, in <code>StatelessCustomActions</code>. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules. </p> </li> </ul>
    """
    
    action_definition: ActionDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionDefinition') }})
    action_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionName') }})
    
