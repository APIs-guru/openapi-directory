package operations

type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams struct {
	Enterprise    string `pathParam:"style=simple,explode=false,name=enterprise"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody struct {
	Runners []int64 `json:"runners"`
}

type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest struct {
	PathParams EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams
	Request    *EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse struct {
	ContentType string
	StatusCode  int64
}
