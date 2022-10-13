package operations

import (
	"openapi/pkg/models/shared"
)

type GetInfoTldResponse struct {
	ContentType string
	StatusCode  int64
	ZoneInfos   []shared.ZoneInfo
}
