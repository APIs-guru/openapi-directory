package shared

type ConsumedLicenseSummary struct {
	ConsumedLicenses *int64            `json:"ConsumedLicenses"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType"`
}
