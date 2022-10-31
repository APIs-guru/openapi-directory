package operations

import (
	"openapi/pkg/models/shared"
)

type ListArtifactsResponse struct {
	ContentType                            string
	Error                                  *shared.Error
	StatusCode                             int64
	ListArtifacts200ApplicationJSONStrings []string
}
