package operations

import (
"openapi/pkg/models/shared")

type DomainsPutRequests struct {
    APICoreDtoDomainsDomain *shared.APICoreDtoDomainsDomain `request:"mediaType=application/json"`
    APICoreDtoDomainsDomain1 *shared.APICoreDtoDomainsDomain `request:"mediaType=application/x-www-form-urlencoded"`
    APICoreDtoDomainsDomain2 *shared.APICoreDtoDomainsDomain `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type DomainsPutRequest struct {
    Request DomainsPutRequests 
    
}

type DomainsPutResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

