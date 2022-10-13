package shared

type QualificationRequirement struct {
	ActionsGuarded      *HitAccessActionsEnum `json:"ActionsGuarded"`
	Comparator          ComparatorEnum        `json:"Comparator"`
	IntegerValues       []int64               `json:"IntegerValues"`
	LocaleValues        []Locale              `json:"LocaleValues"`
	QualificationTypeID string                `json:"QualificationTypeId"`
	RequiredToPreview   *bool                 `json:"RequiredToPreview"`
}
