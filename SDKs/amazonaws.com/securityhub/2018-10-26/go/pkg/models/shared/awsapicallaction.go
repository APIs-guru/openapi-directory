package shared

// AwsAPICallAction
// Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected.
type AwsAPICallAction struct {
	AffectedResources map[string]string              `json:"AffectedResources,omitempty"`
	API               *string                        `json:"Api,omitempty"`
	CallerType        *string                        `json:"CallerType,omitempty"`
	DomainDetails     *AwsAPICallActionDomainDetails `json:"DomainDetails,omitempty"`
	FirstSeen         *string                        `json:"FirstSeen,omitempty"`
	LastSeen          *string                        `json:"LastSeen,omitempty"`
	RemoteIPDetails   *ActionRemoteIPDetails         `json:"RemoteIpDetails,omitempty"`
	ServiceName       *string                        `json:"ServiceName,omitempty"`
}
