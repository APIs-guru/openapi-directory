package shared

type ListTransferConfigsResponse struct {
	NextPageToken   *string          `json:"nextPageToken"`
	TransferConfigs []TransferConfig `json:"transferConfigs"`
}
