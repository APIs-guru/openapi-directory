package shared

type ApigatewayListOperationsResponse struct {
	NextPageToken *string               `json:"nextPageToken,omitempty"`
	Operations    []ApigatewayOperation `json:"operations,omitempty"`
}
