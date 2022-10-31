package operations




type PostDeleteDbInstanceActionEnum string

const (
    PostDeleteDbInstanceActionEnumDeleteDbInstance PostDeleteDbInstanceActionEnum = "DeleteDBInstance"
)



type PostDeleteDbInstanceVersionEnum string

const (
    PostDeleteDbInstanceVersionEnumTwoThousandAndFourteen0901 PostDeleteDbInstanceVersionEnum = "2014-09-01"
)


type PostDeleteDbInstanceQueryParams struct {
    Action PostDeleteDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteDbInstanceRequest struct {
    QueryParams PostDeleteDbInstanceQueryParams 
    Headers PostDeleteDbInstanceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

