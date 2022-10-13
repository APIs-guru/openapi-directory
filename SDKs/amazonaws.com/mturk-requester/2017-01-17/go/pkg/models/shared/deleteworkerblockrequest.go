package shared

type DeleteWorkerBlockRequest struct {
	Reason   *string `json:"Reason"`
	WorkerID string  `json:"WorkerId"`
}
