from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRedshiftClusterHsmStatus:
    r"""AwsRedshiftClusterHsmStatus
    Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command.
    """
    
    hsm_client_certificate_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmClientCertificateIdentifier') }})
    hsm_configuration_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmConfigurationIdentifier') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
