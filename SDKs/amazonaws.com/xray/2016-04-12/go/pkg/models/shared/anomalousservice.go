package shared

// AnomalousService
// The service within the service graph that has anomalously high fault rates.
type AnomalousService struct {
	ServiceID *ServiceID `json:"ServiceId,omitempty"`
}
