package operations

import (
	"openapi/pkg/models/shared"
)

type GetHookEventsSubjectTypeSubjectTypeEnum string

const (
	GetHookEventsSubjectTypeSubjectTypeEnumWorkspace  GetHookEventsSubjectTypeSubjectTypeEnum = "workspace"
	GetHookEventsSubjectTypeSubjectTypeEnumUser       GetHookEventsSubjectTypeSubjectTypeEnum = "user"
	GetHookEventsSubjectTypeSubjectTypeEnumRepository GetHookEventsSubjectTypeSubjectTypeEnum = "repository"
	GetHookEventsSubjectTypeSubjectTypeEnumTeam       GetHookEventsSubjectTypeSubjectTypeEnum = "team"
)

type GetHookEventsSubjectTypePathParams struct {
	SubjectType GetHookEventsSubjectTypeSubjectTypeEnum `pathParam:"style=simple,explode=false,name=subject_type"`
}

type GetHookEventsSubjectTypeSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetHookEventsSubjectTypeSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetHookEventsSubjectTypeSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetHookEventsSubjectTypeSecurity struct {
	Option1 *GetHookEventsSubjectTypeSecurityOption1 `security:"option"`
	Option2 *GetHookEventsSubjectTypeSecurityOption2 `security:"option"`
	Option3 *GetHookEventsSubjectTypeSecurityOption3 `security:"option"`
}

type GetHookEventsSubjectTypeRequest struct {
	PathParams GetHookEventsSubjectTypePathParams
	Security   GetHookEventsSubjectTypeSecurity
}

type GetHookEventsSubjectTypeResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	PaginatedHookEvents *shared.PaginatedHookEvents
}
