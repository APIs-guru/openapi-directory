package shared

// DomainDetails
// Provides information about the domain name of the device that an entity used to perform an action on an affected resource.
type DomainDetails struct {
	DomainName *string `json:"domainName,omitempty"`
}
