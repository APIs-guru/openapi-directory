package operations

import (
	"openapi/pkg/models/shared"
)

type GetInboxRegistrationsQueryParams struct {
	Cursor           *string `queryParam:"style=form,explode=true,name=cursor"`
	FolderBehaviorID int32   `queryParam:"style=form,explode=true,name=folder_behavior_id"`
	PerPage          *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetInboxRegistrationsRequest struct {
	QueryParams GetInboxRegistrationsQueryParams
}

type GetInboxRegistrationsResponse struct {
	ContentType               string
	InboxRegistrationEntities []shared.InboxRegistrationEntity
	StatusCode                int64
}
