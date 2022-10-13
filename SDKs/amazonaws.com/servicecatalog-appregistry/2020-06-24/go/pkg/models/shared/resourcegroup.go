package shared

type ResourceGroup struct {
	Arn          *string                 `json:"arn"`
	ErrorMessage *string                 `json:"errorMessage"`
	State        *ResourceGroupStateEnum `json:"state"`
}
