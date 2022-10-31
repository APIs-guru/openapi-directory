package operations



type PutLexiconPathParams struct {
    LexiconName string `pathParam:"style=simple,explode=false,name=LexiconName"`
    
}

type PutLexiconHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutLexiconRequestBody struct {
    Content string `json:"Content"`
    
}

type PutLexiconRequest struct {
    PathParams PutLexiconPathParams 
    Headers PutLexiconHeaders 
    Request PutLexiconRequestBody `request:"mediaType=application/json"`
    
}

type PutLexiconResponse struct {
    ContentType string 
    InvalidLexiconException *interface{} 
    LexiconSizeExceededException *interface{} 
    MaxLexemeLengthExceededException *interface{} 
    MaxLexiconsNumberExceededException *interface{} 
    PutLexiconOutput map[string]interface{} 
    ServiceFailureException *interface{} 
    StatusCode int64 
    UnsupportedPlsAlphabetException *interface{} 
    UnsupportedPlsLanguageException *interface{} 
    
}

