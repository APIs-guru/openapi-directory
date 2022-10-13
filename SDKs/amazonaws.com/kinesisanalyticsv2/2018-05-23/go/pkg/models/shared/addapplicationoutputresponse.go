package shared

type AddApplicationOutputResponse struct {
	ApplicationArn       *string             `json:"ApplicationARN"`
	ApplicationVersionID *int64              `json:"ApplicationVersionId"`
	OutputDescriptions   []OutputDescription `json:"OutputDescriptions"`
}
