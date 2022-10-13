package shared

type UserDefinedFieldDto struct {
	CategoryTypeID *int64  `json:"categoryTypeId"`
	Description    *string `json:"description"`
	ID             *int64  `json:"id"`
	OrderIndex     *int32  `json:"orderIndex"`
}
