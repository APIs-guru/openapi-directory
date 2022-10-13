package operations

import (
	"openapi/pkg/models/shared"
)

type InviteMemberPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
}

type InviteMemberRequests struct {
	InviteMembersRequest  *shared.InviteMembersRequest `request:"mediaType=application/*+json"`
	InviteMembersRequest1 *shared.InviteMembersRequest `request:"mediaType=application/json"`
	InviteMembersRequest2 *shared.InviteMembersRequest `request:"mediaType=text/json"`
}

type InviteMemberRequest struct {
	PathParams InviteMemberPathParams
	Request    InviteMemberRequests
}

type InviteMemberResponse struct {
	ContentType string
	StatusCode  int64
}
