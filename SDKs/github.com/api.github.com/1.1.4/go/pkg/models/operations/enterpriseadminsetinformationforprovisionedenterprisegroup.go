package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams struct {
	Enterprise  string `pathParam:"style=simple,explode=false,name=enterprise"`
	ScimGroupID string `pathParam:"style=simple,explode=false,name=scim_group_id"`
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers struct {
	Value string `json:"value"`
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody struct {
	DisplayName string                                                                         `json:"displayName"`
	Members     []EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers `json:"members"`
	Schemas     []string                                                                       `json:"schemas"`
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest struct {
	PathParams EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams
	Request    *EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse struct {
	ContentType         string
	StatusCode          int64
	ScimEnterpriseGroup *shared.ScimEnterpriseGroup
}
