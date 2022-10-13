package operations

import (
	"openapi/pkg/models/shared"
)

type CompanySettingsGetResponse struct {
	ContentType                 string
	PageResultCompanySettingDto *shared.PageResultCompanySettingDto
	StatusCode                  int64
}
