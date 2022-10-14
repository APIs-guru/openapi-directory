package shared

type ItemConditionPolicy struct {
	CategoryID            *string         `json:"categoryId,omitempty"`
	CategoryTreeID        *string         `json:"categoryTreeId,omitempty"`
	ItemConditionRequired *bool           `json:"itemConditionRequired,omitempty"`
	ItemConditions        []ItemCondition `json:"itemConditions,omitempty"`
}
