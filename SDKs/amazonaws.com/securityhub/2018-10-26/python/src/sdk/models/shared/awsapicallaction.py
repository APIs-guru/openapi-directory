from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsAPICallAction:
    r"""AwsAPICallAction
    Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected.
    """
    
    affected_resources: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AffectedResources') }})
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Api') }})
    caller_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CallerType') }})
    domain_details: Optional[AwsAPICallActionDomainDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainDetails') }})
    first_seen: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstSeen') }})
    last_seen: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSeen') }})
    remote_ip_details: Optional[ActionRemoteIPDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteIpDetails') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    
