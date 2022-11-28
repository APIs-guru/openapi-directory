from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Domain:
    r"""Domain
    <p>The domain to associate with an Amazon WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href=\"https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html\">Adding a domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostedZoneId') }})
    
