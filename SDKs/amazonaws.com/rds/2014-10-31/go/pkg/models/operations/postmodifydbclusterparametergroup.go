package operations




type PostModifyDbClusterParameterGroupActionEnum string

const (
    PostModifyDbClusterParameterGroupActionEnumModifyDbClusterParameterGroup PostModifyDbClusterParameterGroupActionEnum = "ModifyDBClusterParameterGroup"
)



type PostModifyDbClusterParameterGroupVersionEnum string

const (
    PostModifyDbClusterParameterGroupVersionEnumTwoThousandAndFourteen1031 PostModifyDbClusterParameterGroupVersionEnum = "2014-10-31"
)


type PostModifyDbClusterParameterGroupQueryParams struct {
    Action PostModifyDbClusterParameterGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyDbClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyDbClusterParameterGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyDbClusterParameterGroupRequest struct {
    QueryParams PostModifyDbClusterParameterGroupQueryParams 
    Headers PostModifyDbClusterParameterGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyDbClusterParameterGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

