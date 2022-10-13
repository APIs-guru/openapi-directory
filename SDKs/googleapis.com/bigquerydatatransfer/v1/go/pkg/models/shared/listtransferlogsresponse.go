package shared

type ListTransferLogsResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	TransferMessages []TransferMessage `json:"transferMessages"`
}
