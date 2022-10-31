package operations




type GetDescribeDataSharesForConsumerActionEnum string

const (
    GetDescribeDataSharesForConsumerActionEnumDescribeDataSharesForConsumer GetDescribeDataSharesForConsumerActionEnum = "DescribeDataSharesForConsumer"
)



type GetDescribeDataSharesForConsumerStatusEnum string

const (
    GetDescribeDataSharesForConsumerStatusEnumActive GetDescribeDataSharesForConsumerStatusEnum = "ACTIVE"
GetDescribeDataSharesForConsumerStatusEnumAvailable GetDescribeDataSharesForConsumerStatusEnum = "AVAILABLE"
)



type GetDescribeDataSharesForConsumerVersionEnum string

const (
    GetDescribeDataSharesForConsumerVersionEnumTwoThousandAndTwelve1201 GetDescribeDataSharesForConsumerVersionEnum = "2012-12-01"
)


type GetDescribeDataSharesForConsumerQueryParams struct {
    Action GetDescribeDataSharesForConsumerActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ConsumerArn *string `queryParam:"style=form,explode=true,name=ConsumerArn"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    Status *GetDescribeDataSharesForConsumerStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    Version GetDescribeDataSharesForConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeDataSharesForConsumerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeDataSharesForConsumerRequest struct {
    QueryParams GetDescribeDataSharesForConsumerQueryParams 
    Headers GetDescribeDataSharesForConsumerHeaders 
    
}

type GetDescribeDataSharesForConsumerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

