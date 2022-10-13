package shared

type UserFileKeySetBatchRequest struct {
	Items []UserFileKeySetRequest `json:"items"`
}
