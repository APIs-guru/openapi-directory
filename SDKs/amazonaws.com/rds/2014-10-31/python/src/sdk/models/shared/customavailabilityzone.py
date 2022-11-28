from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CustomAvailabilityZone:
    r"""CustomAvailabilityZone
    <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p> <p>For more information about RDS on VMware, see the <a href=\"https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html\"> RDS on VMware User Guide.</a> </p>
    """
    
    custom_availability_zone_id: Optional[str] = field(default=None)
    custom_availability_zone_name: Optional[str] = field(default=None)
    custom_availability_zone_status: Optional[str] = field(default=None)
    vpn_details: Optional[VpnDetails] = field(default=None)
    
