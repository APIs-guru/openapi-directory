package operations

type IssuesDeleteLabelPathParams struct {
	Name  string `pathParam:"style=simple,explode=false,name=name"`
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesDeleteLabelRequest struct {
	PathParams IssuesDeleteLabelPathParams
}

type IssuesDeleteLabelResponse struct {
	ContentType string
	StatusCode  int64
}
