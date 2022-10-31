package operations



type CanvasDetailsQueryParams struct {
    CanvasID *string `queryParam:"style=form,explode=true,name=canvas_id"`
    
}

type CanvasDetailsRequest struct {
    QueryParams CanvasDetailsQueryParams 
    
}

type CanvasDetailsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

