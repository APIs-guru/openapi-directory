package operations

import (
	"openapi/pkg/models/shared"
)

type MetaGetResponse struct {
	ContentType string
	StatusCode  int64
	APIOverview *shared.APIOverview
}
