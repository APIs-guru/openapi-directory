package operations

import (
	"openapi/pkg/models/shared"
)

type GetSiteResponse struct {
	ContentType string
	SiteEntity  *shared.SiteEntity
	StatusCode  int64
}
