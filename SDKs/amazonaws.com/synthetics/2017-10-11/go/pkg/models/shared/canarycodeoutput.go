package shared

type CanaryCodeOutput struct {
	Handler           *string `json:"Handler"`
	SourceLocationArn *string `json:"SourceLocationArn"`
}
