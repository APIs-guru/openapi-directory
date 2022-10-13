package shared

type SyncResourceResponse struct {
	ActionTaken    *SyncActionEnum `json:"actionTaken"`
	ApplicationArn *string         `json:"applicationArn"`
	ResourceArn    *string         `json:"resourceArn"`
}
