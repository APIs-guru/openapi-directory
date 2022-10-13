package shared

type EventStream struct {
	ApplicationID        string  `json:"ApplicationId"`
	DestinationStreamArn string  `json:"DestinationStreamArn"`
	ExternalID           *string `json:"ExternalId"`
	LastModifiedDate     *string `json:"LastModifiedDate"`
	LastUpdatedBy        *string `json:"LastUpdatedBy"`
	RoleArn              string  `json:"RoleArn"`
}
