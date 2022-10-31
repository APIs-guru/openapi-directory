package operations




type PostModifyClusterActionEnum string

const (
    PostModifyClusterActionEnumModifyCluster PostModifyClusterActionEnum = "ModifyCluster"
)



type PostModifyClusterVersionEnum string

const (
    PostModifyClusterVersionEnumTwoThousandAndTwelve1201 PostModifyClusterVersionEnum = "2012-12-01"
)


type PostModifyClusterQueryParams struct {
    Action PostModifyClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyClusterRequest struct {
    QueryParams PostModifyClusterQueryParams 
    Headers PostModifyClusterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

