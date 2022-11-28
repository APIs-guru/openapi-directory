package shared

type LinkedConnectorResource struct {
	DownstreamID   *string             `json:"downstream_id,omitempty"`
	DownstreamName *string             `json:"downstream_name,omitempty"`
	ID             *string             `json:"id,omitempty"`
	Name           *string             `json:"name,omitempty"`
	Status         *ResourceStatusEnum `json:"status,omitempty"`
}
