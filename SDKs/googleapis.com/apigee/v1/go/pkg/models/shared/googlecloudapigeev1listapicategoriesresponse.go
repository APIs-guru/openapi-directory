package shared

type GoogleCloudApigeeV1ListAPICategoriesResponse struct {
	Data      []GoogleCloudApigeeV1APICategoryData `json:"data"`
	ErrorCode *string                              `json:"errorCode"`
	Message   *string                              `json:"message"`
	RequestID *string                              `json:"requestId"`
	Status    *string                              `json:"status"`
}
