package shared

type DataReplicationErrorStringEnum string

const (
	DataReplicationErrorStringEnumAgentNotSeen                            DataReplicationErrorStringEnum = "AGENT_NOT_SEEN"
	DataReplicationErrorStringEnumSnapshotsFailure                        DataReplicationErrorStringEnum = "SNAPSHOTS_FAILURE"
	DataReplicationErrorStringEnumNotConverging                           DataReplicationErrorStringEnum = "NOT_CONVERGING"
	DataReplicationErrorStringEnumUnstableNetwork                         DataReplicationErrorStringEnum = "UNSTABLE_NETWORK"
	DataReplicationErrorStringEnumFailedToCreateSecurityGroup             DataReplicationErrorStringEnum = "FAILED_TO_CREATE_SECURITY_GROUP"
	DataReplicationErrorStringEnumFailedToLaunchReplicationServer         DataReplicationErrorStringEnum = "FAILED_TO_LAUNCH_REPLICATION_SERVER"
	DataReplicationErrorStringEnumFailedToBootReplicationServer           DataReplicationErrorStringEnum = "FAILED_TO_BOOT_REPLICATION_SERVER"
	DataReplicationErrorStringEnumFailedToAuthenticateWithService         DataReplicationErrorStringEnum = "FAILED_TO_AUTHENTICATE_WITH_SERVICE"
	DataReplicationErrorStringEnumFailedToDownloadReplicationSoftware     DataReplicationErrorStringEnum = "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE"
	DataReplicationErrorStringEnumFailedToCreateStagingDisks              DataReplicationErrorStringEnum = "FAILED_TO_CREATE_STAGING_DISKS"
	DataReplicationErrorStringEnumFailedToAttachStagingDisks              DataReplicationErrorStringEnum = "FAILED_TO_ATTACH_STAGING_DISKS"
	DataReplicationErrorStringEnumFailedToPairReplicationServerWithAgent  DataReplicationErrorStringEnum = "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT"
	DataReplicationErrorStringEnumFailedToConnectAgentToReplicationServer DataReplicationErrorStringEnum = "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER"
	DataReplicationErrorStringEnumFailedToStartDataTransfer               DataReplicationErrorStringEnum = "FAILED_TO_START_DATA_TRANSFER"
)
