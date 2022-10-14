package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum string

const (
	EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumSelected EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum = "selected"
	EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnumAll      EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum = "all"
)

type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody struct {
	Name                    string                                                                            `json:"name"`
	Runners                 []int64                                                                           `json:"runners,omitempty"`
	SelectedOrganizationIds []int64                                                                           `json:"selected_organization_ids,omitempty"`
	Visibility              *EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum `json:"visibility,omitempty"`
}

type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest struct {
	PathParams EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams
	Request    *EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse struct {
	ContentType            string
	StatusCode             int64
	RunnerGroupsEnterprise *shared.RunnerGroupsEnterprise
}
