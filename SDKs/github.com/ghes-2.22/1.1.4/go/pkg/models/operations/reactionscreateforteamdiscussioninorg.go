package operations

import (
	"openapi/pkg/models/shared"
)

type ReactionsCreateForTeamDiscussionInOrgPathParams struct {
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum string

const (
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumPlus1    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "+1"
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumMinus1   ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "-1"
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumLaugh    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "laugh"
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumConfused ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "confused"
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumHeart    ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "heart"
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumHooray   ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "hooray"
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumRocket   ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "rocket"
	ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnumEyes     ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum = "eyes"
)

type ReactionsCreateForTeamDiscussionInOrgRequestBody struct {
	Content ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum `json:"content"`
}

type ReactionsCreateForTeamDiscussionInOrgRequest struct {
	PathParams ReactionsCreateForTeamDiscussionInOrgPathParams
	Request    *ReactionsCreateForTeamDiscussionInOrgRequestBody `request:"mediaType=application/json"`
}

type ReactionsCreateForTeamDiscussionInOrgResponse struct {
	ContentType string
	StatusCode  int64
	Reaction    *shared.Reaction
}
