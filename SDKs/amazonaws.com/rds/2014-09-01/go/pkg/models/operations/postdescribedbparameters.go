package operations




type PostDescribeDbParametersActionEnum string

const (
    PostDescribeDbParametersActionEnumDescribeDbParameters PostDescribeDbParametersActionEnum = "DescribeDBParameters"
)



type PostDescribeDbParametersVersionEnum string

const (
    PostDescribeDbParametersVersionEnumTwoThousandAndFourteen0901 PostDescribeDbParametersVersionEnum = "2014-09-01"
)


type PostDescribeDbParametersQueryParams struct {
    Action PostDescribeDbParametersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeDbParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDbParametersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDbParametersRequest struct {
    QueryParams PostDescribeDbParametersQueryParams 
    Headers PostDescribeDbParametersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDbParametersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

