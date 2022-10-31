package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminSetAnnouncementRequest struct {
	Request *shared.Announcement `request:"mediaType=application/json"`
}

type EnterpriseAdminSetAnnouncementResponse struct {
	ContentType  string
	StatusCode   int64
	Announcement *shared.Announcement
}
