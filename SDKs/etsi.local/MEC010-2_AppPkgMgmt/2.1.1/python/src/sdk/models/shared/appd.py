from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AppD:
    app_d_id: str = field()
    app_d_version: str = field()
    app_description: str = field()
    app_name: str = field()
    app_provider: str = field()
    app_soft_version: str = field()
    mec_version: List[str] = field()
    sw_image_descriptor: str = field()
    virtual_compute_descriptor: str = field()
    app_dns_rule: Optional[List[DNSRuleDescriptor]] = field(default=None)
    app_ext_cpd: Optional[List[AppExternalCpd]] = field(default=None)
    app_feature_optional: Optional[List[FeatureDependency]] = field(default=None)
    app_feature_required: Optional[List[FeatureDependency]] = field(default=None)
    app_info_name: Optional[str] = field(default=None)
    app_latency: Optional[LatencyDescriptor] = field(default=None)
    app_service_optional: Optional[List[ServiceDependency]] = field(default=None)
    app_service_produced: Optional[List[ServiceDescriptor]] = field(default=None)
    app_service_required: Optional[List[ServiceDependency]] = field(default=None)
    app_traffic_rule: Optional[List[TrafficRuleDescriptor]] = field(default=None)
    change_app_instance_state_op_config: Optional[str] = field(default=None)
    terminate_app_instance_op_config: Optional[str] = field(default=None)
    transport_dependencies: Optional[List[TransportDependency]] = field(default=None)
    virtual_storage_descriptor: Optional[List[str]] = field(default=None)
    
