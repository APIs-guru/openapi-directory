package shared

// ConsumedLicenseSummary
// Details about license consumption.
type ConsumedLicenseSummary struct {
	ConsumedLicenses *int64            `json:"ConsumedLicenses,omitempty"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
