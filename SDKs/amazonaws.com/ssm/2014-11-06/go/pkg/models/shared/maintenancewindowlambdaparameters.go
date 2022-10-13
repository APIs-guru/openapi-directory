package shared

type MaintenanceWindowLambdaParameters struct {
	ClientContext *string `json:"ClientContext"`
	Payload       *string `json:"Payload"`
	Qualifier     *string `json:"Qualifier"`
}
