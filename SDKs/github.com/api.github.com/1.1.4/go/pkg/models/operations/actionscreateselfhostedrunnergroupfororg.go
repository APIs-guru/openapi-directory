package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsCreateSelfHostedRunnerGroupForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum string

const (
	ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumSelected ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum = "selected"
	ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumAll      ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum = "all"
	ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnumPrivate  ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum = "private"
)

type ActionsCreateSelfHostedRunnerGroupForOrgRequestBody struct {
	Name                  string                                                             `json:"name"`
	Runners               []int64                                                            `json:"runners,omitempty"`
	SelectedRepositoryIds []int64                                                            `json:"selected_repository_ids,omitempty"`
	Visibility            *ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum `json:"visibility,omitempty"`
}

type ActionsCreateSelfHostedRunnerGroupForOrgRequest struct {
	PathParams ActionsCreateSelfHostedRunnerGroupForOrgPathParams
	Request    *ActionsCreateSelfHostedRunnerGroupForOrgRequestBody `request:"mediaType=application/json"`
}

type ActionsCreateSelfHostedRunnerGroupForOrgResponse struct {
	ContentType     string
	StatusCode      int64
	RunnerGroupsOrg *shared.RunnerGroupsOrg
}
