package operations




type PostCreateDbClusterEndpointActionEnum string

const (
    PostCreateDbClusterEndpointActionEnumCreateDbClusterEndpoint PostCreateDbClusterEndpointActionEnum = "CreateDBClusterEndpoint"
)



type PostCreateDbClusterEndpointVersionEnum string

const (
    PostCreateDbClusterEndpointVersionEnumTwoThousandAndFourteen1031 PostCreateDbClusterEndpointVersionEnum = "2014-10-31"
)


type PostCreateDbClusterEndpointQueryParams struct {
    Action PostCreateDbClusterEndpointActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateDbClusterEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateDbClusterEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateDbClusterEndpointRequest struct {
    QueryParams PostCreateDbClusterEndpointQueryParams 
    Headers PostCreateDbClusterEndpointHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateDbClusterEndpointResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

