package operations




type PostDescribeOptionGroupOptionsActionEnum string

const (
    PostDescribeOptionGroupOptionsActionEnumDescribeOptionGroupOptions PostDescribeOptionGroupOptionsActionEnum = "DescribeOptionGroupOptions"
)



type PostDescribeOptionGroupOptionsVersionEnum string

const (
    PostDescribeOptionGroupOptionsVersionEnumTwoThousandAndFourteen1031 PostDescribeOptionGroupOptionsVersionEnum = "2014-10-31"
)


type PostDescribeOptionGroupOptionsQueryParams struct {
    Action PostDescribeOptionGroupOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeOptionGroupOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeOptionGroupOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeOptionGroupOptionsRequest struct {
    QueryParams PostDescribeOptionGroupOptionsQueryParams 
    Headers PostDescribeOptionGroupOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeOptionGroupOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

