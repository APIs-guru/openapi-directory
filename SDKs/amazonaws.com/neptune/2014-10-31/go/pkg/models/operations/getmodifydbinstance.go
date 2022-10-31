package operations




type GetModifyDbInstanceActionEnum string

const (
    GetModifyDbInstanceActionEnumModifyDbInstance GetModifyDbInstanceActionEnum = "ModifyDBInstance"
)


type GetModifyDbInstanceCloudwatchLogsExportConfiguration struct {
    DisableLogTypes []string `queryParam:"name=DisableLogTypes"`
    EnableLogTypes []string `queryParam:"name=EnableLogTypes"`
    
}


type GetModifyDbInstanceVersionEnum string

const (
    GetModifyDbInstanceVersionEnumTwoThousandAndFourteen1031 GetModifyDbInstanceVersionEnum = "2014-10-31"
)


type GetModifyDbInstanceQueryParams struct {
    Action GetModifyDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AllocatedStorage *int64 `queryParam:"style=form,explode=true,name=AllocatedStorage"`
    AllowMajorVersionUpgrade *bool `queryParam:"style=form,explode=true,name=AllowMajorVersionUpgrade"`
    ApplyImmediately *bool `queryParam:"style=form,explode=true,name=ApplyImmediately"`
    AutoMinorVersionUpgrade *bool `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
    BackupRetentionPeriod *int64 `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
    CaCertificateIdentifier *string `queryParam:"style=form,explode=true,name=CACertificateIdentifier"`
    CloudwatchLogsExportConfiguration *GetModifyDbInstanceCloudwatchLogsExportConfiguration `queryParam:"style=form,explode=true,name=CloudwatchLogsExportConfiguration"`
    CopyTagsToSnapshot *bool `queryParam:"style=form,explode=true,name=CopyTagsToSnapshot"`
    DbInstanceClass *string `queryParam:"style=form,explode=true,name=DBInstanceClass"`
    DbInstanceIdentifier string `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
    DbParameterGroupName *string `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
    DbPortNumber *int64 `queryParam:"style=form,explode=true,name=DBPortNumber"`
    DbSecurityGroups []string `queryParam:"style=form,explode=true,name=DBSecurityGroups"`
    DbSubnetGroupName *string `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
    DeletionProtection *bool `queryParam:"style=form,explode=true,name=DeletionProtection"`
    Domain *string `queryParam:"style=form,explode=true,name=Domain"`
    DomainIamRoleName *string `queryParam:"style=form,explode=true,name=DomainIAMRoleName"`
    EnableIamDatabaseAuthentication *bool `queryParam:"style=form,explode=true,name=EnableIAMDatabaseAuthentication"`
    EnablePerformanceInsights *bool `queryParam:"style=form,explode=true,name=EnablePerformanceInsights"`
    EngineVersion *string `queryParam:"style=form,explode=true,name=EngineVersion"`
    Iops *int64 `queryParam:"style=form,explode=true,name=Iops"`
    LicenseModel *string `queryParam:"style=form,explode=true,name=LicenseModel"`
    MasterUserPassword *string `queryParam:"style=form,explode=true,name=MasterUserPassword"`
    MonitoringInterval *int64 `queryParam:"style=form,explode=true,name=MonitoringInterval"`
    MonitoringRoleArn *string `queryParam:"style=form,explode=true,name=MonitoringRoleArn"`
    MultiAz *bool `queryParam:"style=form,explode=true,name=MultiAZ"`
    NewDbInstanceIdentifier *string `queryParam:"style=form,explode=true,name=NewDBInstanceIdentifier"`
    OptionGroupName *string `queryParam:"style=form,explode=true,name=OptionGroupName"`
    PerformanceInsightsKmsKeyID *string `queryParam:"style=form,explode=true,name=PerformanceInsightsKMSKeyId"`
    PreferredBackupWindow *string `queryParam:"style=form,explode=true,name=PreferredBackupWindow"`
    PreferredMaintenanceWindow *string `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
    PromotionTier *int64 `queryParam:"style=form,explode=true,name=PromotionTier"`
    PubliclyAccessible *bool `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
    StorageType *string `queryParam:"style=form,explode=true,name=StorageType"`
    TdeCredentialArn *string `queryParam:"style=form,explode=true,name=TdeCredentialArn"`
    TdeCredentialPassword *string `queryParam:"style=form,explode=true,name=TdeCredentialPassword"`
    Version GetModifyDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcSecurityGroupIds []string `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
    
}

type GetModifyDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyDbInstanceRequest struct {
    QueryParams GetModifyDbInstanceQueryParams 
    Headers GetModifyDbInstanceHeaders 
    
}

type GetModifyDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

