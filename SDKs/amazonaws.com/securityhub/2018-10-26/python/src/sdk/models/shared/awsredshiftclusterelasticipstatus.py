from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsRedshiftClusterElasticIPStatus:
    r"""AwsRedshiftClusterElasticIPStatus
    The status of the elastic IP (EIP) address for an Amazon Redshift cluster.
    """
    
    elastic_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticIp') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
