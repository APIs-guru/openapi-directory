from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableDbInstanceOption:
    r"""OrderableDbInstanceOption
    <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
    """
    
    availability_zone_group: Optional[str] = field(default=None)
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None)
    available_processor_features: Optional[List[AvailableProcessorFeature]] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    license_model: Optional[str] = field(default=None)
    max_iops_per_db_instance: Optional[int] = field(default=None)
    max_iops_per_gib: Optional[float] = field(default=None)
    max_storage_size: Optional[int] = field(default=None)
    min_iops_per_db_instance: Optional[int] = field(default=None)
    min_iops_per_gib: Optional[float] = field(default=None)
    min_storage_size: Optional[int] = field(default=None)
    multi_az_capable: Optional[bool] = field(default=None)
    outpost_capable: Optional[bool] = field(default=None)
    read_replica_capable: Optional[bool] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    supported_activity_stream_modes: Optional[List[str]] = field(default=None)
    supported_engine_modes: Optional[List[str]] = field(default=None)
    supports_enhanced_monitoring: Optional[bool] = field(default=None)
    supports_global_databases: Optional[bool] = field(default=None)
    supports_iam_database_authentication: Optional[bool] = field(default=None)
    supports_iops: Optional[bool] = field(default=None)
    supports_kerberos_authentication: Optional[bool] = field(default=None)
    supports_performance_insights: Optional[bool] = field(default=None)
    supports_storage_autoscaling: Optional[bool] = field(default=None)
    supports_storage_encryption: Optional[bool] = field(default=None)
    vpc: Optional[bool] = field(default=None)
    
