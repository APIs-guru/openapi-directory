package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyAnnouncementPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompanyAnnouncementSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyAnnouncementRequest struct {
	PathParams CompanyAnnouncementPathParams
	Security   CompanyAnnouncementSecurity
}

type CompanyAnnouncementResponse struct {
	CompanyAnnouncement200ApplicationJSONAnies   []interface{}
	CompanyAnnouncementDefaultApplicationJSONAny *interface{}
	ContentType                                  string
	StatusCode                                   int64
}
