package shared



type AwsRdsDbSnapshotDetails struct {
    AllocatedStorage *int64 `json:"AllocatedStorage,omitempty"`
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    DbInstanceIdentifier *string `json:"DbInstanceIdentifier,omitempty"`
    DbSnapshotIdentifier *string `json:"DbSnapshotIdentifier,omitempty"`
    DbiResourceID *string `json:"DbiResourceId,omitempty"`
    Encrypted *bool `json:"Encrypted,omitempty"`
    Engine *string `json:"Engine,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    IamDatabaseAuthenticationEnabled *bool `json:"IamDatabaseAuthenticationEnabled,omitempty"`
    InstanceCreateTime *string `json:"InstanceCreateTime,omitempty"`
    Iops *int64 `json:"Iops,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    LicenseModel *string `json:"LicenseModel,omitempty"`
    MasterUsername *string `json:"MasterUsername,omitempty"`
    OptionGroupName *string `json:"OptionGroupName,omitempty"`
    PercentProgress *int64 `json:"PercentProgress,omitempty"`
    Port *int64 `json:"Port,omitempty"`
    ProcessorFeatures []AwsRdsDbProcessorFeature `json:"ProcessorFeatures,omitempty"`
    SnapshotCreateTime *string `json:"SnapshotCreateTime,omitempty"`
    SnapshotType *string `json:"SnapshotType,omitempty"`
    SourceDbSnapshotIdentifier *string `json:"SourceDbSnapshotIdentifier,omitempty"`
    SourceRegion *string `json:"SourceRegion,omitempty"`
    Status *string `json:"Status,omitempty"`
    StorageType *string `json:"StorageType,omitempty"`
    TdeCredentialArn *string `json:"TdeCredentialArn,omitempty"`
    Timezone *string `json:"Timezone,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

