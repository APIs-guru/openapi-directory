package operations




type GetDescribeEventSubscriptionsActionEnum string

const (
    GetDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions GetDescribeEventSubscriptionsActionEnum = "DescribeEventSubscriptions"
)



type GetDescribeEventSubscriptionsVersionEnum string

const (
    GetDescribeEventSubscriptionsVersionEnumTwoThousandAndTwelve1201 GetDescribeEventSubscriptionsVersionEnum = "2012-12-01"
)


type GetDescribeEventSubscriptionsQueryParams struct {
    Action GetDescribeEventSubscriptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    SubscriptionName *string `queryParam:"style=form,explode=true,name=SubscriptionName"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    TagValues []string `queryParam:"style=form,explode=true,name=TagValues"`
    Version GetDescribeEventSubscriptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeEventSubscriptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeEventSubscriptionsRequest struct {
    QueryParams GetDescribeEventSubscriptionsQueryParams 
    Headers GetDescribeEventSubscriptionsHeaders 
    
}

type GetDescribeEventSubscriptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

