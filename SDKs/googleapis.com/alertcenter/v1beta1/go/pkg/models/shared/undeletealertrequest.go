package shared

// UndeleteAlertRequest
// A request to undelete a specific alert that was marked for deletion.
type UndeleteAlertRequest struct {
	CustomerID *string `json:"customerId,omitempty"`
}
