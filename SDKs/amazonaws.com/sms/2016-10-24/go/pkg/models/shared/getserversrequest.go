package shared

type GetServersRequest struct {
	MaxResults          *int64            `json:"maxResults"`
	NextToken           *string           `json:"nextToken"`
	VMServerAddressList []VMServerAddress `json:"vmServerAddressList"`
}
