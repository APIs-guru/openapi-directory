package operations

import (
"openapi/pkg/models/shared")

type CreateOrderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateOrderRequestBodyPaymentOptionEnum string

const (
    CreateOrderRequestBodyPaymentOptionEnumAllUpfront CreateOrderRequestBodyPaymentOptionEnum = "ALL_UPFRONT"
CreateOrderRequestBodyPaymentOptionEnumNoUpfront CreateOrderRequestBodyPaymentOptionEnum = "NO_UPFRONT"
CreateOrderRequestBodyPaymentOptionEnumPartialUpfront CreateOrderRequestBodyPaymentOptionEnum = "PARTIAL_UPFRONT"
)



type CreateOrderRequestBodyPaymentTermEnum string

const (
    CreateOrderRequestBodyPaymentTermEnumThreeYears CreateOrderRequestBodyPaymentTermEnum = "THREE_YEARS"
)


type CreateOrderRequestBody struct {
    LineItems []shared.LineItemRequest `json:"LineItems"`
    OutpostIdentifier string `json:"OutpostIdentifier"`
    PaymentOption CreateOrderRequestBodyPaymentOptionEnum `json:"PaymentOption"`
    PaymentTerm *CreateOrderRequestBodyPaymentTermEnum `json:"PaymentTerm,omitempty"`
    
}

type CreateOrderRequest struct {
    Headers CreateOrderHeaders 
    Request CreateOrderRequestBody `request:"mediaType=application/json"`
    
}

type CreateOrderResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateOrderOutput *shared.CreateOrderOutput 
    InternalServerException *interface{} 
    NotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

