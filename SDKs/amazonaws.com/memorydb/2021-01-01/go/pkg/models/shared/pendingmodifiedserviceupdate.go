package shared

// PendingModifiedServiceUpdate
// Update action that has yet to be processed for the corresponding apply/stop request
type PendingModifiedServiceUpdate struct {
	ServiceUpdateName *string                  `json:"ServiceUpdateName,omitempty"`
	Status            *ServiceUpdateStatusEnum `json:"Status,omitempty"`
}
