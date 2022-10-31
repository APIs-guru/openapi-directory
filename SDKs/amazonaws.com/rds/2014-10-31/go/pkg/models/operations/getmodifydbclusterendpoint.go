package operations




type GetModifyDbClusterEndpointActionEnum string

const (
    GetModifyDbClusterEndpointActionEnumModifyDbClusterEndpoint GetModifyDbClusterEndpointActionEnum = "ModifyDBClusterEndpoint"
)



type GetModifyDbClusterEndpointVersionEnum string

const (
    GetModifyDbClusterEndpointVersionEnumTwoThousandAndFourteen1031 GetModifyDbClusterEndpointVersionEnum = "2014-10-31"
)


type GetModifyDbClusterEndpointQueryParams struct {
    Action GetModifyDbClusterEndpointActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbClusterEndpointIdentifier string `queryParam:"style=form,explode=true,name=DBClusterEndpointIdentifier"`
    EndpointType *string `queryParam:"style=form,explode=true,name=EndpointType"`
    ExcludedMembers []string `queryParam:"style=form,explode=true,name=ExcludedMembers"`
    StaticMembers []string `queryParam:"style=form,explode=true,name=StaticMembers"`
    Version GetModifyDbClusterEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyDbClusterEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyDbClusterEndpointRequest struct {
    QueryParams GetModifyDbClusterEndpointQueryParams 
    Headers GetModifyDbClusterEndpointHeaders 
    
}

type GetModifyDbClusterEndpointResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

