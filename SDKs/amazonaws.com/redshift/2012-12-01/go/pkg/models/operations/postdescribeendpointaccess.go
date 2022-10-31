package operations




type PostDescribeEndpointAccessActionEnum string

const (
    PostDescribeEndpointAccessActionEnumDescribeEndpointAccess PostDescribeEndpointAccessActionEnum = "DescribeEndpointAccess"
)



type PostDescribeEndpointAccessVersionEnum string

const (
    PostDescribeEndpointAccessVersionEnumTwoThousandAndTwelve1201 PostDescribeEndpointAccessVersionEnum = "2012-12-01"
)


type PostDescribeEndpointAccessQueryParams struct {
    Action PostDescribeEndpointAccessActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeEndpointAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeEndpointAccessRequest struct {
    QueryParams PostDescribeEndpointAccessQueryParams 
    Headers PostDescribeEndpointAccessHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeEndpointAccessResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

