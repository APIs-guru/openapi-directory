


export enum DataReplicationInitiationStepNameEnum {
    Wait = "WAIT",
    CreateSecurityGroup = "CREATE_SECURITY_GROUP",
    LaunchReplicationServer = "LAUNCH_REPLICATION_SERVER",
    BootReplicationServer = "BOOT_REPLICATION_SERVER",
    AuthenticateWithService = "AUTHENTICATE_WITH_SERVICE",
    DownloadReplicationSoftware = "DOWNLOAD_REPLICATION_SOFTWARE",
    CreateStagingDisks = "CREATE_STAGING_DISKS",
    AttachStagingDisks = "ATTACH_STAGING_DISKS",
    PairReplicationServerWithAgent = "PAIR_REPLICATION_SERVER_WITH_AGENT",
    ConnectAgentToReplicationServer = "CONNECT_AGENT_TO_REPLICATION_SERVER",
    StartDataTransfer = "START_DATA_TRANSFER"
}
