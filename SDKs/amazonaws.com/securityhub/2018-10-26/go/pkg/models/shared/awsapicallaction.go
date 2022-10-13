package shared

type AwsAPICallAction struct {
	AffectedResources map[string]string              `json:"AffectedResources"`
	API               *string                        `json:"Api"`
	CallerType        *string                        `json:"CallerType"`
	DomainDetails     *AwsAPICallActionDomainDetails `json:"DomainDetails"`
	FirstSeen         *string                        `json:"FirstSeen"`
	LastSeen          *string                        `json:"LastSeen"`
	RemoteIPDetails   *ActionRemoteIPDetails         `json:"RemoteIpDetails"`
	ServiceName       *string                        `json:"ServiceName"`
}
