package shared

type AcceptPageRequest struct {
	AcceptCode           string                    `json:"AcceptCode"`
	AcceptCodeValidation *AcceptCodeValidationEnum `json:"AcceptCodeValidation"`
	AcceptType           AcceptTypeEnum            `json:"AcceptType"`
	ContactChannelID     *string                   `json:"ContactChannelId"`
	Note                 *string                   `json:"Note"`
	PageID               string                    `json:"PageId"`
}
