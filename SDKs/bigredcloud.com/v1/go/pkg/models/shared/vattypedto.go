package shared

type VatTypeDto struct {
	Code            *string `json:"code,omitempty"`
	Description     *string `json:"description,omitempty"`
	ID              *int64  `json:"id,omitempty"`
	IsNotApplicable *bool   `json:"isNotApplicable,omitempty"`
	IsOnlyZero      *bool   `json:"isOnlyZero,omitempty"`
}
