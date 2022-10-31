package operations




type PostDeleteDbSubnetGroupActionEnum string

const (
    PostDeleteDbSubnetGroupActionEnumDeleteDbSubnetGroup PostDeleteDbSubnetGroupActionEnum = "DeleteDBSubnetGroup"
)



type PostDeleteDbSubnetGroupVersionEnum string

const (
    PostDeleteDbSubnetGroupVersionEnumTwoThousandAndThirteen0909 PostDeleteDbSubnetGroupVersionEnum = "2013-09-09"
)


type PostDeleteDbSubnetGroupQueryParams struct {
    Action PostDeleteDbSubnetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteDbSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteDbSubnetGroupRequest struct {
    QueryParams PostDeleteDbSubnetGroupQueryParams 
    Headers PostDeleteDbSubnetGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteDbSubnetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

