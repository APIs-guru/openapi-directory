package shared

// LogDeliveryDescription
// The description of the log delivery settings.
type LogDeliveryDescription struct {
	WorkerLogDelivery *WorkerLogDeliveryDescription `json:"workerLogDelivery,omitempty"`
}
