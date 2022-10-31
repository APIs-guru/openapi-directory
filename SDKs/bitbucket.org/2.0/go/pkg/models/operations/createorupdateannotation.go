package operations

type CreateOrUpdateAnnotationPathParams struct {
	AnnotationID string `pathParam:"style=simple,explode=false,name=annotationId"`
	Commit       string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	ReportID     string `pathParam:"style=simple,explode=false,name=reportId"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type CreateOrUpdateAnnotationRequest struct {
	PathParams CreateOrUpdateAnnotationPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type CreateOrUpdateAnnotationResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	ReportAnnotation map[string]interface{}
}
