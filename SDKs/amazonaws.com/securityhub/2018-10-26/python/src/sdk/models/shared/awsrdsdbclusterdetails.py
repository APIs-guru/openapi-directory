from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsRdsDbClusterDetails:
    r"""AwsRdsDbClusterDetails
    Information about an Amazon RDS DB cluster.
    """
    
    activity_stream_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityStreamStatus') }})
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedStorage') }})
    associated_roles: Optional[List[AwsRdsDbClusterAssociatedRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatedRoles') }})
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    backup_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPeriod') }})
    cluster_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterCreateTime') }})
    copy_tags_to_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTagsToSnapshot') }})
    cross_account_clone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossAccountClone') }})
    custom_endpoints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomEndpoints') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    db_cluster_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbClusterIdentifier') }})
    db_cluster_members: Optional[List[AwsRdsDbClusterMember]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbClusterMembers') }})
    db_cluster_option_group_memberships: Optional[List[AwsRdsDbClusterOptionGroupMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbClusterOptionGroupMemberships') }})
    db_cluster_parameter_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbClusterParameterGroup') }})
    db_cluster_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbClusterResourceId') }})
    db_subnet_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbSubnetGroup') }})
    deletion_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionProtection') }})
    domain_memberships: Optional[List[AwsRdsDbDomainMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainMemberships') }})
    enabled_cloud_watch_logs_exports: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnabledCloudWatchLogsExports') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Engine') }})
    engine_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineMode') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostedZoneId') }})
    http_endpoint_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpEndpointEnabled') }})
    iam_database_authentication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamDatabaseAuthenticationEnabled') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    master_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterUsername') }})
    multi_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAz') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    preferred_backup_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredBackupWindow') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    read_replica_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadReplicaIdentifiers') }})
    reader_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReaderEndpoint') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    storage_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageEncrypted') }})
    vpc_security_groups: Optional[List[AwsRdsDbInstanceVpcSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSecurityGroups') }})
    
