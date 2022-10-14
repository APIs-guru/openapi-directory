package shared

type BookTranTypeDto struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
}
