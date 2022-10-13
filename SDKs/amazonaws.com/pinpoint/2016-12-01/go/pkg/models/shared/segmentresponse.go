package shared

type SegmentResponse struct {
	ApplicationID    string                 `json:"ApplicationId"`
	Arn              string                 `json:"Arn"`
	CreationDate     string                 `json:"CreationDate"`
	Dimensions       *SegmentDimensions     `json:"Dimensions"`
	ID               string                 `json:"Id"`
	ImportDefinition *SegmentImportResource `json:"ImportDefinition"`
	LastModifiedDate *string                `json:"LastModifiedDate"`
	Name             *string                `json:"Name"`
	SegmentGroups    *SegmentGroupList      `json:"SegmentGroups"`
	SegmentType      SegmentTypeEnum        `json:"SegmentType"`
	Version          *int64                 `json:"Version"`
	Tags             map[string]string      `json:"tags"`
}
