from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableDbInstanceOption:
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    license_model: Optional[str] = field(default=None)
    multi_az_capable: Optional[bool] = field(default=None)
    read_replica_capable: Optional[bool] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    supports_iops: Optional[bool] = field(default=None)
    vpc: Optional[bool] = field(default=None)
    
