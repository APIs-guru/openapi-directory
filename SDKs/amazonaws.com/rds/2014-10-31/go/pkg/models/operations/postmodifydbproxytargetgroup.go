package operations




type PostModifyDbProxyTargetGroupActionEnum string

const (
    PostModifyDbProxyTargetGroupActionEnumModifyDbProxyTargetGroup PostModifyDbProxyTargetGroupActionEnum = "ModifyDBProxyTargetGroup"
)



type PostModifyDbProxyTargetGroupVersionEnum string

const (
    PostModifyDbProxyTargetGroupVersionEnumTwoThousandAndFourteen1031 PostModifyDbProxyTargetGroupVersionEnum = "2014-10-31"
)


type PostModifyDbProxyTargetGroupQueryParams struct {
    Action PostModifyDbProxyTargetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyDbProxyTargetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyDbProxyTargetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyDbProxyTargetGroupRequest struct {
    QueryParams PostModifyDbProxyTargetGroupQueryParams 
    Headers PostModifyDbProxyTargetGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyDbProxyTargetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

