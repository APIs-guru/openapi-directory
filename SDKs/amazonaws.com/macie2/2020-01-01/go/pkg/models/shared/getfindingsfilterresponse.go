package shared

type GetFindingsFilterResponse struct {
	Action          *FindingsFilterActionEnum `json:"action"`
	Arn             *string                   `json:"arn"`
	Description     *string                   `json:"description"`
	FindingCriteria *FindingCriteria          `json:"findingCriteria"`
	ID              *string                   `json:"id"`
	Name            *string                   `json:"name"`
	Position        *int64                    `json:"position"`
	Tags            map[string]string         `json:"tags"`
}
