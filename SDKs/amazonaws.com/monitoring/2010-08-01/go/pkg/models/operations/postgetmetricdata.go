package operations




type PostGetMetricDataActionEnum string

const (
    PostGetMetricDataActionEnumGetMetricData PostGetMetricDataActionEnum = "GetMetricData"
)



type PostGetMetricDataVersionEnum string

const (
    PostGetMetricDataVersionEnumTwoThousandAndTen0801 PostGetMetricDataVersionEnum = "2010-08-01"
)


type PostGetMetricDataQueryParams struct {
    Action PostGetMetricDataActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxDatapoints *string `queryParam:"style=form,explode=true,name=MaxDatapoints"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostGetMetricDataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetMetricDataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetMetricDataRequest struct {
    QueryParams PostGetMetricDataQueryParams 
    Headers PostGetMetricDataHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetMetricDataResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

