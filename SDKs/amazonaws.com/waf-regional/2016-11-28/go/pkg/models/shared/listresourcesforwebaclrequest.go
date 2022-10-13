package shared

type ListResourcesForWebACLRequest struct {
	ResourceType *ResourceTypeEnum `json:"ResourceType"`
	WebACLID     string            `json:"WebACLId"`
}
