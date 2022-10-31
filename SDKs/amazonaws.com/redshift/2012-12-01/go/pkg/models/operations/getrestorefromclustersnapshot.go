package operations




type GetRestoreFromClusterSnapshotActionEnum string

const (
    GetRestoreFromClusterSnapshotActionEnumRestoreFromClusterSnapshot GetRestoreFromClusterSnapshotActionEnum = "RestoreFromClusterSnapshot"
)



type GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum string

const (
    GetRestoreFromClusterSnapshotAquaConfigurationStatusEnumEnabled GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum = "enabled"
GetRestoreFromClusterSnapshotAquaConfigurationStatusEnumDisabled GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum = "disabled"
GetRestoreFromClusterSnapshotAquaConfigurationStatusEnumAuto GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum = "auto"
)



type GetRestoreFromClusterSnapshotVersionEnum string

const (
    GetRestoreFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201 GetRestoreFromClusterSnapshotVersionEnum = "2012-12-01"
)


type GetRestoreFromClusterSnapshotQueryParams struct {
    Action GetRestoreFromClusterSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AdditionalInfo *string `queryParam:"style=form,explode=true,name=AdditionalInfo"`
    AllowVersionUpgrade *bool `queryParam:"style=form,explode=true,name=AllowVersionUpgrade"`
    AquaConfigurationStatus *GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum `queryParam:"style=form,explode=true,name=AquaConfigurationStatus"`
    AutomatedSnapshotRetentionPeriod *int64 `queryParam:"style=form,explode=true,name=AutomatedSnapshotRetentionPeriod"`
    AvailabilityZone *string `queryParam:"style=form,explode=true,name=AvailabilityZone"`
    AvailabilityZoneRelocation *bool `queryParam:"style=form,explode=true,name=AvailabilityZoneRelocation"`
    ClusterIdentifier string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    ClusterParameterGroupName *string `queryParam:"style=form,explode=true,name=ClusterParameterGroupName"`
    ClusterSecurityGroups []string `queryParam:"style=form,explode=true,name=ClusterSecurityGroups"`
    ClusterSubnetGroupName *string `queryParam:"style=form,explode=true,name=ClusterSubnetGroupName"`
    ElasticIP *string `queryParam:"style=form,explode=true,name=ElasticIp"`
    EnhancedVpcRouting *bool `queryParam:"style=form,explode=true,name=EnhancedVpcRouting"`
    HsmClientCertificateIdentifier *string `queryParam:"style=form,explode=true,name=HsmClientCertificateIdentifier"`
    HsmConfigurationIdentifier *string `queryParam:"style=form,explode=true,name=HsmConfigurationIdentifier"`
    IamRoles []string `queryParam:"style=form,explode=true,name=IamRoles"`
    KmsKeyID *string `queryParam:"style=form,explode=true,name=KmsKeyId"`
    MaintenanceTrackName *string `queryParam:"style=form,explode=true,name=MaintenanceTrackName"`
    ManualSnapshotRetentionPeriod *int64 `queryParam:"style=form,explode=true,name=ManualSnapshotRetentionPeriod"`
    NodeType *string `queryParam:"style=form,explode=true,name=NodeType"`
    NumberOfNodes *int64 `queryParam:"style=form,explode=true,name=NumberOfNodes"`
    OwnerAccount *string `queryParam:"style=form,explode=true,name=OwnerAccount"`
    Port *int64 `queryParam:"style=form,explode=true,name=Port"`
    PreferredMaintenanceWindow *string `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
    PubliclyAccessible *bool `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
    SnapshotClusterIdentifier *string `queryParam:"style=form,explode=true,name=SnapshotClusterIdentifier"`
    SnapshotIdentifier string `queryParam:"style=form,explode=true,name=SnapshotIdentifier"`
    SnapshotScheduleIdentifier *string `queryParam:"style=form,explode=true,name=SnapshotScheduleIdentifier"`
    Version GetRestoreFromClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcSecurityGroupIds []string `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
    
}

type GetRestoreFromClusterSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRestoreFromClusterSnapshotRequest struct {
    QueryParams GetRestoreFromClusterSnapshotQueryParams 
    Headers GetRestoreFromClusterSnapshotHeaders 
    
}

type GetRestoreFromClusterSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

