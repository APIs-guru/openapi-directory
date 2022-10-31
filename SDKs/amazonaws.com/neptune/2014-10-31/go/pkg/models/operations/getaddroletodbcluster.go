package operations




type GetAddRoleToDbClusterActionEnum string

const (
    GetAddRoleToDbClusterActionEnumAddRoleToDbCluster GetAddRoleToDbClusterActionEnum = "AddRoleToDBCluster"
)



type GetAddRoleToDbClusterVersionEnum string

const (
    GetAddRoleToDbClusterVersionEnumTwoThousandAndFourteen1031 GetAddRoleToDbClusterVersionEnum = "2014-10-31"
)


type GetAddRoleToDbClusterQueryParams struct {
    Action GetAddRoleToDbClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbClusterIdentifier string `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
    FeatureName *string `queryParam:"style=form,explode=true,name=FeatureName"`
    RoleArn string `queryParam:"style=form,explode=true,name=RoleArn"`
    Version GetAddRoleToDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAddRoleToDbClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAddRoleToDbClusterRequest struct {
    QueryParams GetAddRoleToDbClusterQueryParams 
    Headers GetAddRoleToDbClusterHeaders 
    
}

type GetAddRoleToDbClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

