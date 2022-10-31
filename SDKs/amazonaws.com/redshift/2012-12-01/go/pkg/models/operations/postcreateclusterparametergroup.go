package operations




type PostCreateClusterParameterGroupActionEnum string

const (
    PostCreateClusterParameterGroupActionEnumCreateClusterParameterGroup PostCreateClusterParameterGroupActionEnum = "CreateClusterParameterGroup"
)



type PostCreateClusterParameterGroupVersionEnum string

const (
    PostCreateClusterParameterGroupVersionEnumTwoThousandAndTwelve1201 PostCreateClusterParameterGroupVersionEnum = "2012-12-01"
)


type PostCreateClusterParameterGroupQueryParams struct {
    Action PostCreateClusterParameterGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateClusterParameterGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateClusterParameterGroupRequest struct {
    QueryParams PostCreateClusterParameterGroupQueryParams 
    Headers PostCreateClusterParameterGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateClusterParameterGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

