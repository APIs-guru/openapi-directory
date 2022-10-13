package shared

type ListResourcesInProtectionGroupResponse struct {
	NextToken    *string  `json:"NextToken"`
	ResourceArns []string `json:"ResourceArns"`
}
