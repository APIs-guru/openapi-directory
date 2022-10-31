package operations

import (
"openapi/pkg/models/shared")

type DomainsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DomainsUpdateRequests struct {
    APICoreDtoDomainsDomain *shared.APICoreDtoDomainsDomain `request:"mediaType=application/json"`
    APICoreDtoDomainsDomain1 *shared.APICoreDtoDomainsDomain `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreDtoDomainsDomain2 *shared.APICoreDtoDomainsDomain `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type DomainsUpdateRequest struct {
    PathParams DomainsUpdatePathParams 
    Request DomainsUpdateRequests 
    
}

type DomainsUpdateResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

