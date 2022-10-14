package shared

type ServiceAccountKeysListResponse struct {
	ServiceAccountKey []ServiceAccountKey `json:"serviceAccountKey,omitempty"`
}
