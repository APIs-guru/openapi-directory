package shared

type GoogleCloudApigeeV1ListNatAddressesResponse struct {
	NatAddresses  []GoogleCloudApigeeV1NatAddress `json:"natAddresses"`
	NextPageToken *string                         `json:"nextPageToken"`
}
