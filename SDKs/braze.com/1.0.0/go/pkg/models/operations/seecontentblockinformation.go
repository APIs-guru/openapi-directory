package operations



type SeeContentBlockInformationQueryParams struct {
    ContentBlockID *string `queryParam:"style=form,explode=true,name=content_block_id"`
    IncludeInclusionData *string `queryParam:"style=form,explode=true,name=include_inclusion_data"`
    
}

type SeeContentBlockInformationRequest struct {
    QueryParams SeeContentBlockInformationQueryParams 
    
}

type SeeContentBlockInformationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

