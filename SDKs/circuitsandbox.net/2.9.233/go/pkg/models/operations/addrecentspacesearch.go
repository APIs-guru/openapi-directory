package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type AddRecentSpaceSearchRequestBodyScopeEnum string

const (
	AddRecentSpaceSearchRequestBodyScopeEnumAll     AddRecentSpaceSearchRequestBodyScopeEnum = "ALL"
	AddRecentSpaceSearchRequestBodyScopeEnumSpaces  AddRecentSpaceSearchRequestBodyScopeEnum = "SPACES"
	AddRecentSpaceSearchRequestBodyScopeEnumTopicby AddRecentSpaceSearchRequestBodyScopeEnum = "TOPICBY"
	AddRecentSpaceSearchRequestBodyScopeEnumFiles   AddRecentSpaceSearchRequestBodyScopeEnum = "FILES"
	AddRecentSpaceSearchRequestBodyScopeEnumTags    AddRecentSpaceSearchRequestBodyScopeEnum = "TAGS"
	AddRecentSpaceSearchRequestBodyScopeEnumLabels  AddRecentSpaceSearchRequestBodyScopeEnum = "LABELS"
	AddRecentSpaceSearchRequestBodyScopeEnumDate    AddRecentSpaceSearchRequestBodyScopeEnum = "DATE"
)

type AddRecentSpaceSearchRequestBody struct {
	EndTime    *time.Time                               `form:"name=endTime"`
	Scope      AddRecentSpaceSearchRequestBodyScopeEnum `form:"name=scope"`
	SearchTerm string                                   `form:"name=searchTerm"`
	StartTime  *time.Time                               `form:"name=startTime"`
}

type AddRecentSpaceSearchSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddRecentSpaceSearchRequest struct {
	Request  AddRecentSpaceSearchRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security AddRecentSpaceSearchSecurity
}

type AddRecentSpaceSearchResponse struct {
	ContentType string
	StatusCode  int64
}
