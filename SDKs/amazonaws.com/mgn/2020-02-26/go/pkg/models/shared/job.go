package shared

type Job struct {
	Arn                  *string               `json:"arn,omitempty"`
	CreationDateTime     *string               `json:"creationDateTime,omitempty"`
	EndDateTime          *string               `json:"endDateTime,omitempty"`
	InitiatedBy          *InitiatedByEnum      `json:"initiatedBy,omitempty"`
	JobID                string                `json:"jobID"`
	ParticipatingServers []ParticipatingServer `json:"participatingServers,omitempty"`
	Status               *JobStatusEnum        `json:"status,omitempty"`
	Tags                 map[string]string     `json:"tags,omitempty"`
	Type                 *JobTypeEnum          `json:"type,omitempty"`
}
