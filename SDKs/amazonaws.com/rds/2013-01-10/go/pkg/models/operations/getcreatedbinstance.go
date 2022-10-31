package operations




type GetCreateDbInstanceActionEnum string

const (
    GetCreateDbInstanceActionEnumCreateDbInstance GetCreateDbInstanceActionEnum = "CreateDBInstance"
)



type GetCreateDbInstanceVersionEnum string

const (
    GetCreateDbInstanceVersionEnumTwoThousandAndThirteen0110 GetCreateDbInstanceVersionEnum = "2013-01-10"
)


type GetCreateDbInstanceQueryParams struct {
    Action GetCreateDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AllocatedStorage int64 `queryParam:"style=form,explode=true,name=AllocatedStorage"`
    AutoMinorVersionUpgrade *bool `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
    AvailabilityZone *string `queryParam:"style=form,explode=true,name=AvailabilityZone"`
    BackupRetentionPeriod *int64 `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
    CharacterSetName *string `queryParam:"style=form,explode=true,name=CharacterSetName"`
    DbInstanceClass string `queryParam:"style=form,explode=true,name=DBInstanceClass"`
    DbInstanceIdentifier string `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
    DbName *string `queryParam:"style=form,explode=true,name=DBName"`
    DbParameterGroupName *string `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
    DbSecurityGroups []string `queryParam:"style=form,explode=true,name=DBSecurityGroups"`
    DbSubnetGroupName *string `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
    Engine string `queryParam:"style=form,explode=true,name=Engine"`
    EngineVersion *string `queryParam:"style=form,explode=true,name=EngineVersion"`
    Iops *int64 `queryParam:"style=form,explode=true,name=Iops"`
    LicenseModel *string `queryParam:"style=form,explode=true,name=LicenseModel"`
    MasterUserPassword string `queryParam:"style=form,explode=true,name=MasterUserPassword"`
    MasterUsername string `queryParam:"style=form,explode=true,name=MasterUsername"`
    MultiAz *bool `queryParam:"style=form,explode=true,name=MultiAZ"`
    OptionGroupName *string `queryParam:"style=form,explode=true,name=OptionGroupName"`
    Port *int64 `queryParam:"style=form,explode=true,name=Port"`
    PreferredBackupWindow *string `queryParam:"style=form,explode=true,name=PreferredBackupWindow"`
    PreferredMaintenanceWindow *string `queryParam:"style=form,explode=true,name=PreferredMaintenanceWindow"`
    PubliclyAccessible *bool `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
    Version GetCreateDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcSecurityGroupIds []string `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
    
}

type GetCreateDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateDbInstanceRequest struct {
    QueryParams GetCreateDbInstanceQueryParams 
    Headers GetCreateDbInstanceHeaders 
    
}

type GetCreateDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

