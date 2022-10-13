package operations

type MigrationsCancelImportPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type MigrationsCancelImportRequest struct {
	PathParams MigrationsCancelImportPathParams
}

type MigrationsCancelImportResponse struct {
	ContentType string
	StatusCode  int64
}
