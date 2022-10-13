package shared

type GetStaticIpsResult struct {
	NextPageToken *string    `json:"nextPageToken"`
	StaticIps     []StaticIP `json:"staticIps"`
}
