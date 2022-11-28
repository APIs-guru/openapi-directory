package shared

// QualificationRequirement
//
//	The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.
type QualificationRequirement struct {
	ActionsGuarded      *HitAccessActionsEnum `json:"ActionsGuarded,omitempty"`
	Comparator          ComparatorEnum        `json:"Comparator"`
	IntegerValues       []int64               `json:"IntegerValues,omitempty"`
	LocaleValues        []Locale              `json:"LocaleValues,omitempty"`
	QualificationTypeID string                `json:"QualificationTypeId"`
	RequiredToPreview   *bool                 `json:"RequiredToPreview,omitempty"`
}
