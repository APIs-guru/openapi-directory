package shared

type UpdateResolverDnssecConfigRequest struct {
	ResourceID string         `json:"ResourceId"`
	Validation ValidationEnum `json:"Validation"`
}
