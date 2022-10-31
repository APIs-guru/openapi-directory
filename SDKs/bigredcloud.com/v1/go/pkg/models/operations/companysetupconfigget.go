package operations

import (
	"openapi/pkg/models/shared"
)

type CompanySetupConfigGetResponse struct {
	CompanySetupConfigViewModel *shared.CompanySetupConfigViewModel
	ContentType                 string
	StatusCode                  int64
}
