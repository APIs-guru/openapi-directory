package shared

type UserDefinedFieldDto struct {
	CategoryTypeID *int64  `json:"categoryTypeId,omitempty"`
	Description    *string `json:"description,omitempty"`
	ID             *int64  `json:"id,omitempty"`
	OrderIndex     *int32  `json:"orderIndex,omitempty"`
}
