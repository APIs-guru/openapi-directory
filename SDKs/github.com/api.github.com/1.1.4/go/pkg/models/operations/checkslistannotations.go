package operations

import (
	"openapi/pkg/models/shared"
)

type ChecksListAnnotationsPathParams struct {
	CheckRunID int64  `pathParam:"style=simple,explode=false,name=check_run_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksListAnnotationsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ChecksListAnnotationsRequest struct {
	PathParams  ChecksListAnnotationsPathParams
	QueryParams ChecksListAnnotationsQueryParams
}

type ChecksListAnnotationsResponse struct {
	ContentType      string
	Headers          map[string][]string
	StatusCode       int64
	CheckAnnotations []shared.CheckAnnotation
}
