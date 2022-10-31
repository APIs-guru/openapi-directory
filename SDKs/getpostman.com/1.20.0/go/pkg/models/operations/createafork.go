package operations



type CreateAForkPathParams struct {
    CollectionUID string `pathParam:"style=simple,explode=false,name=collection_uid"`
    
}

type CreateAForkQueryParams struct {
    Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
    
}

type CreateAForkRequestBody struct {
    Name *string `json:"name,omitempty"`
    
}

type CreateAForkRequest struct {
    PathParams CreateAForkPathParams 
    QueryParams CreateAForkQueryParams 
    Request *CreateAForkRequestBody `request:"mediaType=application/json"`
    
}

type CreateAForkResponse struct {
    ContentType string 
    StatusCode int64 
    
}

