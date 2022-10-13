package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationsResponse struct {
	ContentType               string
	OrganizationModelHaljsons []shared.OrganizationModelHaljson
	OrganizationModels        []shared.OrganizationModel
	StatusCode                int64
}
