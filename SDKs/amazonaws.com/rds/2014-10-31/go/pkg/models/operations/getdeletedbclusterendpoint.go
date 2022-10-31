package operations




type GetDeleteDbClusterEndpointActionEnum string

const (
    GetDeleteDbClusterEndpointActionEnumDeleteDbClusterEndpoint GetDeleteDbClusterEndpointActionEnum = "DeleteDBClusterEndpoint"
)



type GetDeleteDbClusterEndpointVersionEnum string

const (
    GetDeleteDbClusterEndpointVersionEnumTwoThousandAndFourteen1031 GetDeleteDbClusterEndpointVersionEnum = "2014-10-31"
)


type GetDeleteDbClusterEndpointQueryParams struct {
    Action GetDeleteDbClusterEndpointActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbClusterEndpointIdentifier string `queryParam:"style=form,explode=true,name=DBClusterEndpointIdentifier"`
    Version GetDeleteDbClusterEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteDbClusterEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteDbClusterEndpointRequest struct {
    QueryParams GetDeleteDbClusterEndpointQueryParams 
    Headers GetDeleteDbClusterEndpointHeaders 
    
}

type GetDeleteDbClusterEndpointResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

