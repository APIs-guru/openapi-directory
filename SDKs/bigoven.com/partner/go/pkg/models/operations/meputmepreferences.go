package operations

import (
	"openapi/pkg/models/shared"
)

type MePutMePreferencesRequests struct {
	Api2ModelsPreference  *shared.Api2ModelsPreference `request:"mediaType=application/json"`
	Api2ModelsPreference1 *shared.Api2ModelsPreference `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ModelsPreference2 *shared.Api2ModelsPreference `request:"mediaType=text/json"`
	ApplicationXML        []byte                       `request:"mediaType=application/xml"`
	TextXML               []byte                       `request:"mediaType=text/xml"`
}

type MePutMePreferencesRequest struct {
	Request MePutMePreferencesRequests
}

type MePutMePreferencesResponse struct {
	Api2ModelsBigOvenUser *shared.Api2ModelsBigOvenUser
	Body                  []byte
	ContentType           string
	StatusCode            int64
}
