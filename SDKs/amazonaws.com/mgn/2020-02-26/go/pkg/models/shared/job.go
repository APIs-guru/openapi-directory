package shared

type Job struct {
	Arn                  *string               `json:"arn"`
	CreationDateTime     *string               `json:"creationDateTime"`
	EndDateTime          *string               `json:"endDateTime"`
	InitiatedBy          *InitiatedByEnum      `json:"initiatedBy"`
	JobID                string                `json:"jobID"`
	ParticipatingServers []ParticipatingServer `json:"participatingServers"`
	Status               *JobStatusEnum        `json:"status"`
	Tags                 map[string]string     `json:"tags"`
	Type                 *JobTypeEnum          `json:"type"`
}
