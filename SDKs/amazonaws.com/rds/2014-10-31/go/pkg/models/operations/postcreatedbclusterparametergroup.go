package operations




type PostCreateDbClusterParameterGroupActionEnum string

const (
    PostCreateDbClusterParameterGroupActionEnumCreateDbClusterParameterGroup PostCreateDbClusterParameterGroupActionEnum = "CreateDBClusterParameterGroup"
)



type PostCreateDbClusterParameterGroupVersionEnum string

const (
    PostCreateDbClusterParameterGroupVersionEnumTwoThousandAndFourteen1031 PostCreateDbClusterParameterGroupVersionEnum = "2014-10-31"
)


type PostCreateDbClusterParameterGroupQueryParams struct {
    Action PostCreateDbClusterParameterGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateDbClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateDbClusterParameterGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateDbClusterParameterGroupRequest struct {
    QueryParams PostCreateDbClusterParameterGroupQueryParams 
    Headers PostCreateDbClusterParameterGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateDbClusterParameterGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

