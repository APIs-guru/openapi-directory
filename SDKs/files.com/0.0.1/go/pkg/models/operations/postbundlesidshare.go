package operations



type PostBundlesIDSharePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostBundlesIDShareRequestBody struct {
    Note *string `multipartForm:"name=note"`
    Recipients []map[string]interface{} `multipartForm:"name=recipients,json"`
    To []string `multipartForm:"name=to"`
    
}

type PostBundlesIDShareRequest struct {
    PathParams PostBundlesIDSharePathParams 
    Request *PostBundlesIDShareRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostBundlesIDShareResponse struct {
    ContentType string 
    StatusCode int64 
    
}

