package shared

type DescribePatchPropertiesRequest struct {
	MaxResults      *int64              `json:"MaxResults"`
	NextToken       *string             `json:"NextToken"`
	OperatingSystem OperatingSystemEnum `json:"OperatingSystem"`
	PatchSet        *PatchSetEnum       `json:"PatchSet"`
	Property        PatchPropertyEnum   `json:"Property"`
}
