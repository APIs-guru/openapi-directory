package operations

import (
"openapi/pkg/models/shared")


type CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum string

const (
    CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnumCustom CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum = "custom"
CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnumLetsEncrypt CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum = "lets_encrypt"
)


type CreateCertificatesRequestBodyLetSEncryptCertificateRequest struct {
    DNSNames []string `json:"dns_names"`
    Name string `json:"name"`
    Type *CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum `json:"type,omitempty"`
    
}


type CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum string

const (
    CreateCertificatesRequestBodyCustomCertificateRequestTypeEnumCustom CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum = "custom"
CreateCertificatesRequestBodyCustomCertificateRequestTypeEnumLetsEncrypt CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum = "lets_encrypt"
)


type CreateCertificatesRequestBodyCustomCertificateRequest struct {
    CertificateChain *string `json:"certificate_chain,omitempty"`
    LeafCertificate string `json:"leaf_certificate"`
    Name string `json:"name"`
    PrivateKey string `json:"private_key"`
    Type *CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum `json:"type,omitempty"`
    
}

type CreateCertificatesRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type CreateCertificates201ApplicationJSON struct {
    Certificate *shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems `json:"certificate,omitempty"`
    
}

type CreateCertificates401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateCertificatesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateCertificates201ApplicationJSONObject *CreateCertificates201ApplicationJSON 
    CreateCertificates401ApplicationJSONObject *CreateCertificates401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

