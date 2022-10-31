package shared

type ConsumedLicenseSummary struct {
	ConsumedLicenses *int64            `json:"ConsumedLicenses,omitempty"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
