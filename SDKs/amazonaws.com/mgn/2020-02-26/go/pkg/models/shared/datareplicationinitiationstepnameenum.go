package shared

type DataReplicationInitiationStepNameEnum string

const (
	DataReplicationInitiationStepNameEnumWait                            DataReplicationInitiationStepNameEnum = "WAIT"
	DataReplicationInitiationStepNameEnumCreateSecurityGroup             DataReplicationInitiationStepNameEnum = "CREATE_SECURITY_GROUP"
	DataReplicationInitiationStepNameEnumLaunchReplicationServer         DataReplicationInitiationStepNameEnum = "LAUNCH_REPLICATION_SERVER"
	DataReplicationInitiationStepNameEnumBootReplicationServer           DataReplicationInitiationStepNameEnum = "BOOT_REPLICATION_SERVER"
	DataReplicationInitiationStepNameEnumAuthenticateWithService         DataReplicationInitiationStepNameEnum = "AUTHENTICATE_WITH_SERVICE"
	DataReplicationInitiationStepNameEnumDownloadReplicationSoftware     DataReplicationInitiationStepNameEnum = "DOWNLOAD_REPLICATION_SOFTWARE"
	DataReplicationInitiationStepNameEnumCreateStagingDisks              DataReplicationInitiationStepNameEnum = "CREATE_STAGING_DISKS"
	DataReplicationInitiationStepNameEnumAttachStagingDisks              DataReplicationInitiationStepNameEnum = "ATTACH_STAGING_DISKS"
	DataReplicationInitiationStepNameEnumPairReplicationServerWithAgent  DataReplicationInitiationStepNameEnum = "PAIR_REPLICATION_SERVER_WITH_AGENT"
	DataReplicationInitiationStepNameEnumConnectAgentToReplicationServer DataReplicationInitiationStepNameEnum = "CONNECT_AGENT_TO_REPLICATION_SERVER"
	DataReplicationInitiationStepNameEnumStartDataTransfer               DataReplicationInitiationStepNameEnum = "START_DATA_TRANSFER"
)
