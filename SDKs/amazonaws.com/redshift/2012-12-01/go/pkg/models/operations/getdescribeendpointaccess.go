package operations




type GetDescribeEndpointAccessActionEnum string

const (
    GetDescribeEndpointAccessActionEnumDescribeEndpointAccess GetDescribeEndpointAccessActionEnum = "DescribeEndpointAccess"
)



type GetDescribeEndpointAccessVersionEnum string

const (
    GetDescribeEndpointAccessVersionEnumTwoThousandAndTwelve1201 GetDescribeEndpointAccessVersionEnum = "2012-12-01"
)


type GetDescribeEndpointAccessQueryParams struct {
    Action GetDescribeEndpointAccessActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterIdentifier *string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    EndpointName *string `queryParam:"style=form,explode=true,name=EndpointName"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    ResourceOwner *string `queryParam:"style=form,explode=true,name=ResourceOwner"`
    Version GetDescribeEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcID *string `queryParam:"style=form,explode=true,name=VpcId"`
    
}

type GetDescribeEndpointAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeEndpointAccessRequest struct {
    QueryParams GetDescribeEndpointAccessQueryParams 
    Headers GetDescribeEndpointAccessHeaders 
    
}

type GetDescribeEndpointAccessResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

