from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitConfig:
    r"""GitConfig
    Specifies configuration details for a Git repository in your Amazon Web Services account.
    """
    
    repository_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryUrl') }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Branch') }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretArn') }})
    
