from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrackingOptions:
    r"""TrackingOptions
    <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
    """
    
    custom_redirect_domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomRedirectDomain') }})
    
