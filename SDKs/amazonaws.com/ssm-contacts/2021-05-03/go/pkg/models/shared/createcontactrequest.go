package shared

type CreateContactRequest struct {
	Alias            string          `json:"Alias"`
	DisplayName      *string         `json:"DisplayName"`
	IdempotencyToken *string         `json:"IdempotencyToken"`
	Plan             Plan            `json:"Plan"`
	Tags             []Tag           `json:"Tags"`
	Type             ContactTypeEnum `json:"Type"`
}
