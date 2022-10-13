package shared

type ApigatewayListOperationsResponse struct {
	NextPageToken *string               `json:"nextPageToken"`
	Operations    []ApigatewayOperation `json:"operations"`
}
