package shared

type MaintenanceWindowLambdaParameters struct {
	ClientContext *string `json:"ClientContext,omitempty"`
	Payload       *string `json:"Payload,omitempty"`
	Qualifier     *string `json:"Qualifier,omitempty"`
}
