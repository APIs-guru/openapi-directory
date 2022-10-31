package shared

type ContentRedaction struct {
	RedactionOutput RedactionOutputEnum `json:"RedactionOutput"`
	RedactionType   RedactionTypeEnum   `json:"RedactionType"`
}
