package operations




type PostCreateDbSubnetGroupActionEnum string

const (
    PostCreateDbSubnetGroupActionEnumCreateDbSubnetGroup PostCreateDbSubnetGroupActionEnum = "CreateDBSubnetGroup"
)



type PostCreateDbSubnetGroupVersionEnum string

const (
    PostCreateDbSubnetGroupVersionEnumTwoThousandAndThirteen0110 PostCreateDbSubnetGroupVersionEnum = "2013-01-10"
)


type PostCreateDbSubnetGroupQueryParams struct {
    Action PostCreateDbSubnetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateDbSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateDbSubnetGroupRequest struct {
    QueryParams PostCreateDbSubnetGroupQueryParams 
    Headers PostCreateDbSubnetGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateDbSubnetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

