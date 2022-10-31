package operations




type PostCreateDbInstanceActionEnum string

const (
    PostCreateDbInstanceActionEnumCreateDbInstance PostCreateDbInstanceActionEnum = "CreateDBInstance"
)



type PostCreateDbInstanceVersionEnum string

const (
    PostCreateDbInstanceVersionEnumTwoThousandAndThirteen0212 PostCreateDbInstanceVersionEnum = "2013-02-12"
)


type PostCreateDbInstanceQueryParams struct {
    Action PostCreateDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateDbInstanceRequest struct {
    QueryParams PostCreateDbInstanceQueryParams 
    Headers PostCreateDbInstanceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

