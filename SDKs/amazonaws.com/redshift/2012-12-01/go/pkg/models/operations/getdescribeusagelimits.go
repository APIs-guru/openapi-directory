package operations




type GetDescribeUsageLimitsActionEnum string

const (
    GetDescribeUsageLimitsActionEnumDescribeUsageLimits GetDescribeUsageLimitsActionEnum = "DescribeUsageLimits"
)



type GetDescribeUsageLimitsFeatureTypeEnum string

const (
    GetDescribeUsageLimitsFeatureTypeEnumSpectrum GetDescribeUsageLimitsFeatureTypeEnum = "spectrum"
GetDescribeUsageLimitsFeatureTypeEnumConcurrencyScaling GetDescribeUsageLimitsFeatureTypeEnum = "concurrency-scaling"
)



type GetDescribeUsageLimitsVersionEnum string

const (
    GetDescribeUsageLimitsVersionEnumTwoThousandAndTwelve1201 GetDescribeUsageLimitsVersionEnum = "2012-12-01"
)


type GetDescribeUsageLimitsQueryParams struct {
    Action GetDescribeUsageLimitsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterIdentifier *string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    FeatureType *GetDescribeUsageLimitsFeatureTypeEnum `queryParam:"style=form,explode=true,name=FeatureType"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    TagKeys []string `queryParam:"style=form,explode=true,name=TagKeys"`
    TagValues []string `queryParam:"style=form,explode=true,name=TagValues"`
    UsageLimitID *string `queryParam:"style=form,explode=true,name=UsageLimitId"`
    Version GetDescribeUsageLimitsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeUsageLimitsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeUsageLimitsRequest struct {
    QueryParams GetDescribeUsageLimitsQueryParams 
    Headers GetDescribeUsageLimitsHeaders 
    
}

type GetDescribeUsageLimitsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

