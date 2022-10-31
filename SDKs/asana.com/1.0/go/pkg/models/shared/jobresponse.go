package shared




type JobResponseStatusEnum string

const (
    JobResponseStatusEnumNotStarted JobResponseStatusEnum = "not_started"
JobResponseStatusEnumInProgress JobResponseStatusEnum = "in_progress"
JobResponseStatusEnumCompleted JobResponseStatusEnum = "completed"
JobResponseStatusEnumFailed JobResponseStatusEnum = "failed"
)


type JobResponse struct {
    Gid *string `json:"gid,omitempty"`
    NewProject *ProjectCompact `json:"new_project,omitempty"`
    NewTask *TaskCompact `json:"new_task,omitempty"`
    ResourceSubtype *string `json:"resource_subtype,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    Status *JobResponseStatusEnum `json:"status,omitempty"`
    
}

