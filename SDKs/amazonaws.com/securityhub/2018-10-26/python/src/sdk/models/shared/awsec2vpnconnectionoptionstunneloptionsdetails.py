from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2VpnConnectionOptionsTunnelOptionsDetails:
    dpd_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DpdTimeoutSeconds' }})
    ike_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IkeVersions' }})
    outside_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutsideIpAddress' }})
    phase1_dh_group_numbers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase1DhGroupNumbers' }})
    phase1_encryption_algorithms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase1EncryptionAlgorithms' }})
    phase1_integrity_algorithms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase1IntegrityAlgorithms' }})
    phase1_lifetime_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase1LifetimeSeconds' }})
    phase2_dh_group_numbers: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase2DhGroupNumbers' }})
    phase2_encryption_algorithms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase2EncryptionAlgorithms' }})
    phase2_integrity_algorithms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase2IntegrityAlgorithms' }})
    phase2_lifetime_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phase2LifetimeSeconds' }})
    pre_shared_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreSharedKey' }})
    rekey_fuzz_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RekeyFuzzPercentage' }})
    rekey_margin_time_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RekeyMarginTimeSeconds' }})
    replay_window_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayWindowSize' }})
    tunnel_inside_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TunnelInsideCidr' }})
    
