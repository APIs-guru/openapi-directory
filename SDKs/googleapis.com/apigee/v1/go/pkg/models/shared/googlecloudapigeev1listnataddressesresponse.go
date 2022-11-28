package shared

// GoogleCloudApigeeV1ListNatAddressesResponse
// Response for ListNatAddresses.
type GoogleCloudApigeeV1ListNatAddressesResponse struct {
	NatAddresses  []GoogleCloudApigeeV1NatAddress `json:"natAddresses,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
