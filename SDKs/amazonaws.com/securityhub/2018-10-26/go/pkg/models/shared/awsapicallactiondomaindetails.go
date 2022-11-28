package shared

// AwsAPICallActionDomainDetails
// Provided if <code>CallerType</code> is <code>domain</code>. It provides information about the DNS domain that issued the API call.
type AwsAPICallActionDomainDetails struct {
	Domain *string `json:"Domain,omitempty"`
}
