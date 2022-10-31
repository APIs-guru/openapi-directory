from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyClusterActionEnum(str, Enum):
    MODIFY_CLUSTER = "ModifyCluster"

class GetModifyClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyClusterQueryParams:
    action: GetModifyClusterActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    allow_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowVersionUpgrade', 'style': 'form', 'explode': True }})
    automated_snapshot_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'AutomatedSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    availability_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    availability_zone_relocation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZoneRelocation', 'style': 'form', 'explode': True }})
    cluster_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'ClusterIdentifier', 'style': 'form', 'explode': True }})
    cluster_parameter_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterParameterGroupName', 'style': 'form', 'explode': True }})
    cluster_security_groups: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterSecurityGroups', 'style': 'form', 'explode': True }})
    cluster_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterType', 'style': 'form', 'explode': True }})
    cluster_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClusterVersion', 'style': 'form', 'explode': True }})
    elastic_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ElasticIp', 'style': 'form', 'explode': True }})
    encrypted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Encrypted', 'style': 'form', 'explode': True }})
    enhanced_vpc_routing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'EnhancedVpcRouting', 'style': 'form', 'explode': True }})
    hsm_client_certificate_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HsmClientCertificateIdentifier', 'style': 'form', 'explode': True }})
    hsm_configuration_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HsmConfigurationIdentifier', 'style': 'form', 'explode': True }})
    kms_key_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    maintenance_track_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaintenanceTrackName', 'style': 'form', 'explode': True }})
    manual_snapshot_retention_period: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    master_user_password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MasterUserPassword', 'style': 'form', 'explode': True }})
    new_cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewClusterIdentifier', 'style': 'form', 'explode': True }})
    node_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NodeType', 'style': 'form', 'explode': True }})
    number_of_nodes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'NumberOfNodes', 'style': 'form', 'explode': True }})
    port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Port', 'style': 'form', 'explode': True }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredMaintenanceWindow', 'style': 'form', 'explode': True }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'PubliclyAccessible', 'style': 'form', 'explode': True }})
    version: GetModifyClusterVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_security_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VpcSecurityGroupIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyClusterRequest:
    query_params: GetModifyClusterQueryParams = field(default=None)
    headers: GetModifyClusterHeaders = field(default=None)
    

@dataclass
class GetModifyClusterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
