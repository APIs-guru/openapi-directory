package operations




type PostDeleteDbParameterGroupActionEnum string

const (
    PostDeleteDbParameterGroupActionEnumDeleteDbParameterGroup PostDeleteDbParameterGroupActionEnum = "DeleteDBParameterGroup"
)



type PostDeleteDbParameterGroupVersionEnum string

const (
    PostDeleteDbParameterGroupVersionEnumTwoThousandAndFourteen1031 PostDeleteDbParameterGroupVersionEnum = "2014-10-31"
)


type PostDeleteDbParameterGroupQueryParams struct {
    Action PostDeleteDbParameterGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteDbParameterGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteDbParameterGroupRequest struct {
    QueryParams PostDeleteDbParameterGroupQueryParams 
    Headers PostDeleteDbParameterGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteDbParameterGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

