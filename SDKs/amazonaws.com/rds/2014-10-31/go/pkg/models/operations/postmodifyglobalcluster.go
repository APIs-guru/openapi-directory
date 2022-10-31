package operations




type PostModifyGlobalClusterActionEnum string

const (
    PostModifyGlobalClusterActionEnumModifyGlobalCluster PostModifyGlobalClusterActionEnum = "ModifyGlobalCluster"
)



type PostModifyGlobalClusterVersionEnum string

const (
    PostModifyGlobalClusterVersionEnumTwoThousandAndFourteen1031 PostModifyGlobalClusterVersionEnum = "2014-10-31"
)


type PostModifyGlobalClusterQueryParams struct {
    Action PostModifyGlobalClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyGlobalClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyGlobalClusterRequest struct {
    QueryParams PostModifyGlobalClusterQueryParams 
    Headers PostModifyGlobalClusterHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyGlobalClusterResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

