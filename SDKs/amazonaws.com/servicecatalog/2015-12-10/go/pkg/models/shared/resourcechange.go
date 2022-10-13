package shared

type ResourceChange struct {
	Action             *ChangeActionEnum       `json:"Action"`
	Details            []ResourceChangeDetail  `json:"Details"`
	LogicalResourceID  *string                 `json:"LogicalResourceId"`
	PhysicalResourceID *string                 `json:"PhysicalResourceId"`
	Replacement        *ReplacementEnum        `json:"Replacement"`
	ResourceType       *string                 `json:"ResourceType"`
	Scope              []ResourceAttributeEnum `json:"Scope"`
}
