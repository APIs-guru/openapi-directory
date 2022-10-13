package shared

type VatTypeDto struct {
	Code            *string `json:"code"`
	Description     *string `json:"description"`
	ID              *int64  `json:"id"`
	IsNotApplicable *bool   `json:"isNotApplicable"`
	IsOnlyZero      *bool   `json:"isOnlyZero"`
}
