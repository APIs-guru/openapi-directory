package shared

type AwsAPIGatewayAccessLogSettings struct {
	DestinationArn *string `json:"DestinationArn"`
	Format         *string `json:"Format"`
}
