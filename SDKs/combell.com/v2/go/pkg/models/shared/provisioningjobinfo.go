package shared

type ProvisioningJobInfo struct {
	Completion *CompletionEstimation      `json:"completion"`
	ID         *string                    `json:"id"`
	Status     *ProvisioningJobStatusEnum `json:"status"`
}
