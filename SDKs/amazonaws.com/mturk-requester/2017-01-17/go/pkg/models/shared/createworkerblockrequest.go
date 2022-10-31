package shared

type CreateWorkerBlockRequest struct {
	Reason   string `json:"Reason"`
	WorkerID string `json:"WorkerId"`
}
