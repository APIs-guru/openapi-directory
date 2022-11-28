from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogDestinationConfig:
    r"""LogDestinationConfig
    <p>Defines where AWS Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p>
    """
    
    log_destination: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogDestination') }})
    log_destination_type: LogDestinationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogDestinationType') }})
    log_type: LogTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogType') }})
    
