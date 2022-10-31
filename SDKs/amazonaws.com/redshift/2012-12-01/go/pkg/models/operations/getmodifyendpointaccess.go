package operations




type GetModifyEndpointAccessActionEnum string

const (
    GetModifyEndpointAccessActionEnumModifyEndpointAccess GetModifyEndpointAccessActionEnum = "ModifyEndpointAccess"
)



type GetModifyEndpointAccessVersionEnum string

const (
    GetModifyEndpointAccessVersionEnumTwoThousandAndTwelve1201 GetModifyEndpointAccessVersionEnum = "2012-12-01"
)


type GetModifyEndpointAccessQueryParams struct {
    Action GetModifyEndpointAccessActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EndpointName string `queryParam:"style=form,explode=true,name=EndpointName"`
    Version GetModifyEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcSecurityGroupIds []string `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
    
}

type GetModifyEndpointAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyEndpointAccessRequest struct {
    QueryParams GetModifyEndpointAccessQueryParams 
    Headers GetModifyEndpointAccessHeaders 
    
}

type GetModifyEndpointAccessResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

