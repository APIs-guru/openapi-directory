from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class HsmConfiguration:
    r"""HsmConfiguration
    Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
    """
    
    description: Optional[str] = field(default=None)
    hsm_configuration_identifier: Optional[str] = field(default=None)
    hsm_ip_address: Optional[str] = field(default=None)
    hsm_partition_name: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
