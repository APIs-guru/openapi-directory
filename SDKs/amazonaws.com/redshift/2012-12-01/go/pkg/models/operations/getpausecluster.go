package operations




type GetPauseClusterActionEnum string

const (
    GetPauseClusterActionEnumPauseCluster GetPauseClusterActionEnum = "PauseCluster"
)



type GetPauseClusterVersionEnum string

const (
    GetPauseClusterVersionEnumTwoThousandAndTwelve1201 GetPauseClusterVersionEnum = "2012-12-01"
)


type GetPauseClusterQueryParams struct {
    Action GetPauseClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterIdentifier string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    Version GetPauseClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetPauseClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPauseClusterRequest struct {
    QueryParams GetPauseClusterQueryParams 
    Headers GetPauseClusterHeaders 
    
}

type GetPauseClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

