package shared

type PendingModifiedServiceUpdate struct {
	ServiceUpdateName *string                  `json:"ServiceUpdateName"`
	Status            *ServiceUpdateStatusEnum `json:"Status"`
}
