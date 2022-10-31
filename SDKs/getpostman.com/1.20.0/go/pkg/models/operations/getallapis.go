package operations



type GetAllApIsQueryParams struct {
    CreatedBy *string `queryParam:"style=form,explode=true,name=createdBy"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Direction *string `queryParam:"style=form,explode=true,name=direction"`
    IsPublic *string `queryParam:"style=form,explode=true,name=isPublic"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Since *string `queryParam:"style=form,explode=true,name=since"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Summary *string `queryParam:"style=form,explode=true,name=summary"`
    Until *string `queryParam:"style=form,explode=true,name=until"`
    UpdatedBy *string `queryParam:"style=form,explode=true,name=updatedBy"`
    Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
    
}

type GetAllApIsRequest struct {
    QueryParams GetAllApIsQueryParams 
    
}

type GetAllApIsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

