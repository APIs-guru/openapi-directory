from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepositoryAuthConfig:
    r"""RepositoryAuthConfig
    Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field of the <code>ImageConfig</code> object that you passed to a call to <code>CreateModel</code> and the private Docker registry where the model image is hosted requires authentication.
    """
    
    repository_credentials_provider_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryCredentialsProviderArn') }})
    
