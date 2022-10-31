package operations




type PostResetDbParameterGroupActionEnum string

const (
    PostResetDbParameterGroupActionEnumResetDbParameterGroup PostResetDbParameterGroupActionEnum = "ResetDBParameterGroup"
)



type PostResetDbParameterGroupVersionEnum string

const (
    PostResetDbParameterGroupVersionEnumTwoThousandAndFourteen1031 PostResetDbParameterGroupVersionEnum = "2014-10-31"
)


type PostResetDbParameterGroupQueryParams struct {
    Action PostResetDbParameterGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostResetDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostResetDbParameterGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostResetDbParameterGroupRequest struct {
    QueryParams PostResetDbParameterGroupQueryParams 
    Headers PostResetDbParameterGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostResetDbParameterGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

