package operations




type PostBacktrackDbClusterActionEnum string

const (
    PostBacktrackDbClusterActionEnumBacktrackDbCluster PostBacktrackDbClusterActionEnum = "BacktrackDBCluster"
)



type PostBacktrackDbClusterVersionEnum string

const (
    PostBacktrackDbClusterVersionEnumTwoThousandAndFourteen1031 PostBacktrackDbClusterVersionEnum = "2014-10-31"
)


type PostBacktrackDbClusterQueryParams struct {
    Action PostBacktrackDbClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostBacktrackDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostBacktrackDbClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostBacktrackDbClusterRequest struct {
    QueryParams PostBacktrackDbClusterQueryParams 
    Headers PostBacktrackDbClusterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostBacktrackDbClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

