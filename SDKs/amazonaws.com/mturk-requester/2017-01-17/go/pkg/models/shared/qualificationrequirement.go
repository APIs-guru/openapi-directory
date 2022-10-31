package shared



type QualificationRequirement struct {
    ActionsGuarded *HitAccessActionsEnum `json:"ActionsGuarded,omitempty"`
    Comparator ComparatorEnum `json:"Comparator"`
    IntegerValues []int64 `json:"IntegerValues,omitempty"`
    LocaleValues []Locale `json:"LocaleValues,omitempty"`
    QualificationTypeID string `json:"QualificationTypeId"`
    RequiredToPreview *bool `json:"RequiredToPreview,omitempty"`
    
}

