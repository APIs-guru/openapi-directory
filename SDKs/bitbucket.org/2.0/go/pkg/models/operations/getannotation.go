package operations

type GetAnnotationPathParams struct {
	AnnotationID string `pathParam:"style=simple,explode=false,name=annotationId"`
	Commit       string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	ReportID     string `pathParam:"style=simple,explode=false,name=reportId"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetAnnotationRequest struct {
	PathParams GetAnnotationPathParams
}

type GetAnnotationResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	ReportAnnotation map[string]interface{}
}
