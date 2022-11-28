from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecurityHubConfiguration:
    r"""SecurityHubConfiguration
    Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href=\"https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html\">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
    """
    
    publish_classification_findings: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishClassificationFindings') }})
    publish_policy_findings: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishPolicyFindings') }})
    
