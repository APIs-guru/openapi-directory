from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsRedshiftClusterHsmStatus:
    hsm_client_certificate_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmClientCertificateIdentifier' }})
    hsm_configuration_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmConfigurationIdentifier' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
