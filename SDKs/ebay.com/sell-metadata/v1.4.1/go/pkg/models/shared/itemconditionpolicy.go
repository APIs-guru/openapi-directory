package shared

type ItemConditionPolicy struct {
	CategoryID            *string         `json:"categoryId"`
	CategoryTreeID        *string         `json:"categoryTreeId"`
	ItemConditionRequired *bool           `json:"itemConditionRequired"`
	ItemConditions        []ItemCondition `json:"itemConditions"`
}
