package shared

type AddApplicationInputResponse struct {
	ApplicationArn       *string            `json:"ApplicationARN"`
	ApplicationVersionID *int64             `json:"ApplicationVersionId"`
	InputDescriptions    []InputDescription `json:"InputDescriptions"`
}
