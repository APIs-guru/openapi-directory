package operations

import (
"openapi/pkg/models/shared")

type ListWebsiteCertificateAuthoritiesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListWebsiteCertificateAuthoritiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListWebsiteCertificateAuthoritiesRequestBody struct {
    FleetArn string `json:"FleetArn"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListWebsiteCertificateAuthoritiesRequest struct {
    QueryParams ListWebsiteCertificateAuthoritiesQueryParams 
    Headers ListWebsiteCertificateAuthoritiesHeaders 
    Request ListWebsiteCertificateAuthoritiesRequestBody `request:"mediaType=application/json"`
    
}

type ListWebsiteCertificateAuthoritiesResponse struct {
    ContentType string 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ListWebsiteCertificateAuthoritiesResponse *shared.ListWebsiteCertificateAuthoritiesResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

