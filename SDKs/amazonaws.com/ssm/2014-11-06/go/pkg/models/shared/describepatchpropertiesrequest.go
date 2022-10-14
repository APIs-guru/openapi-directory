package shared

type DescribePatchPropertiesRequest struct {
	MaxResults      *int64              `json:"MaxResults,omitempty"`
	NextToken       *string             `json:"NextToken,omitempty"`
	OperatingSystem OperatingSystemEnum `json:"OperatingSystem"`
	PatchSet        *PatchSetEnum       `json:"PatchSet,omitempty"`
	Property        PatchPropertyEnum   `json:"Property"`
}
