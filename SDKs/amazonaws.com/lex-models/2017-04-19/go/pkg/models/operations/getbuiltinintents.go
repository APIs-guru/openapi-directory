package operations

import (
"openapi/pkg/models/shared")


type GetBuiltinIntentsLocaleEnum string

const (
    GetBuiltinIntentsLocaleEnumDeDe GetBuiltinIntentsLocaleEnum = "de-DE"
GetBuiltinIntentsLocaleEnumEnAu GetBuiltinIntentsLocaleEnum = "en-AU"
GetBuiltinIntentsLocaleEnumEnGb GetBuiltinIntentsLocaleEnum = "en-GB"
GetBuiltinIntentsLocaleEnumEnIn GetBuiltinIntentsLocaleEnum = "en-IN"
GetBuiltinIntentsLocaleEnumEnUs GetBuiltinIntentsLocaleEnum = "en-US"
GetBuiltinIntentsLocaleEnumEs419 GetBuiltinIntentsLocaleEnum = "es-419"
GetBuiltinIntentsLocaleEnumEsEs GetBuiltinIntentsLocaleEnum = "es-ES"
GetBuiltinIntentsLocaleEnumEsUs GetBuiltinIntentsLocaleEnum = "es-US"
GetBuiltinIntentsLocaleEnumFrFr GetBuiltinIntentsLocaleEnum = "fr-FR"
GetBuiltinIntentsLocaleEnumFrCa GetBuiltinIntentsLocaleEnum = "fr-CA"
GetBuiltinIntentsLocaleEnumItIt GetBuiltinIntentsLocaleEnum = "it-IT"
GetBuiltinIntentsLocaleEnumJaJp GetBuiltinIntentsLocaleEnum = "ja-JP"
GetBuiltinIntentsLocaleEnumKoKr GetBuiltinIntentsLocaleEnum = "ko-KR"
)


type GetBuiltinIntentsQueryParams struct {
    Locale *GetBuiltinIntentsLocaleEnum `queryParam:"style=form,explode=true,name=locale"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    SignatureContains *string `queryParam:"style=form,explode=true,name=signatureContains"`
    
}

type GetBuiltinIntentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetBuiltinIntentsRequest struct {
    QueryParams GetBuiltinIntentsQueryParams 
    Headers GetBuiltinIntentsHeaders 
    
}

type GetBuiltinIntentsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetBuiltinIntentsResponse *shared.GetBuiltinIntentsResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

