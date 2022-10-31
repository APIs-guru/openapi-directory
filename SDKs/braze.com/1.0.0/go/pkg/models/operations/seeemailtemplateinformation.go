package operations



type SeeEmailTemplateInformationQueryParams struct {
    EmailTemplateID *string `queryParam:"style=form,explode=true,name=email_template_id"`
    
}

type SeeEmailTemplateInformationRequest struct {
    QueryParams SeeEmailTemplateInformationQueryParams 
    
}

type SeeEmailTemplateInformationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

