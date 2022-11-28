package shared

// GoogleCloudApigeeV1Quota
// Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters.
type GoogleCloudApigeeV1Quota struct {
	Interval *string `json:"interval,omitempty"`
	Limit    *string `json:"limit,omitempty"`
	TimeUnit *string `json:"timeUnit,omitempty"`
}
