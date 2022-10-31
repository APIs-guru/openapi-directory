package operations




type GetCreateEndpointAccessActionEnum string

const (
    GetCreateEndpointAccessActionEnumCreateEndpointAccess GetCreateEndpointAccessActionEnum = "CreateEndpointAccess"
)



type GetCreateEndpointAccessVersionEnum string

const (
    GetCreateEndpointAccessVersionEnumTwoThousandAndTwelve1201 GetCreateEndpointAccessVersionEnum = "2012-12-01"
)


type GetCreateEndpointAccessQueryParams struct {
    Action GetCreateEndpointAccessActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterIdentifier *string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    EndpointName string `queryParam:"style=form,explode=true,name=EndpointName"`
    ResourceOwner *string `queryParam:"style=form,explode=true,name=ResourceOwner"`
    SubnetGroupName string `queryParam:"style=form,explode=true,name=SubnetGroupName"`
    Version GetCreateEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcSecurityGroupIds []string `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
    
}

type GetCreateEndpointAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateEndpointAccessRequest struct {
    QueryParams GetCreateEndpointAccessQueryParams 
    Headers GetCreateEndpointAccessHeaders 
    
}

type GetCreateEndpointAccessResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

