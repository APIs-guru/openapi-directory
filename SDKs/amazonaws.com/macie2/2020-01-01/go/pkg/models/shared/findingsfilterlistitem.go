package shared

type FindingsFilterListItem struct {
	Action *FindingsFilterActionEnum `json:"action"`
	Arn    *string                   `json:"arn"`
	ID     *string                   `json:"id"`
	Name   *string                   `json:"name"`
	Tags   map[string]string         `json:"tags"`
}
