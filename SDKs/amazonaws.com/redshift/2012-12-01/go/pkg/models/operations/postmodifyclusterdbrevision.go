package operations




type PostModifyClusterDbRevisionActionEnum string

const (
    PostModifyClusterDbRevisionActionEnumModifyClusterDbRevision PostModifyClusterDbRevisionActionEnum = "ModifyClusterDbRevision"
)



type PostModifyClusterDbRevisionVersionEnum string

const (
    PostModifyClusterDbRevisionVersionEnumTwoThousandAndTwelve1201 PostModifyClusterDbRevisionVersionEnum = "2012-12-01"
)


type PostModifyClusterDbRevisionQueryParams struct {
    Action PostModifyClusterDbRevisionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyClusterDbRevisionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyClusterDbRevisionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyClusterDbRevisionRequest struct {
    QueryParams PostModifyClusterDbRevisionQueryParams 
    Headers PostModifyClusterDbRevisionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyClusterDbRevisionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

