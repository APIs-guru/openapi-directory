package operations




type PostRebootClusterActionEnum string

const (
    PostRebootClusterActionEnumRebootCluster PostRebootClusterActionEnum = "RebootCluster"
)



type PostRebootClusterVersionEnum string

const (
    PostRebootClusterVersionEnumTwoThousandAndTwelve1201 PostRebootClusterVersionEnum = "2012-12-01"
)


type PostRebootClusterQueryParams struct {
    Action PostRebootClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRebootClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRebootClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRebootClusterRequest struct {
    QueryParams PostRebootClusterQueryParams 
    Headers PostRebootClusterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRebootClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

