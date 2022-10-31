package shared



type AwsRdsEventSubscriptionDetails struct {
    CustSubscriptionID *string `json:"CustSubscriptionId,omitempty"`
    CustomerAwsID *string `json:"CustomerAwsId,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    EventCategoriesList []string `json:"EventCategoriesList,omitempty"`
    EventSubscriptionArn *string `json:"EventSubscriptionArn,omitempty"`
    SnsTopicArn *string `json:"SnsTopicArn,omitempty"`
    SourceIdsList []string `json:"SourceIdsList,omitempty"`
    SourceType *string `json:"SourceType,omitempty"`
    Status *string `json:"Status,omitempty"`
    SubscriptionCreationTime *string `json:"SubscriptionCreationTime,omitempty"`
    
}

