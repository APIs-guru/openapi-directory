package shared

type CampaignResponse struct {
	AdditionalTreatments        []TreatmentResource          `json:"AdditionalTreatments"`
	ApplicationID               string                       `json:"ApplicationId"`
	Arn                         string                       `json:"Arn"`
	CreationDate                string                       `json:"CreationDate"`
	CustomDeliveryConfiguration *CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration"`
	DefaultState                *CampaignState               `json:"DefaultState"`
	Description                 *string                      `json:"Description"`
	HoldoutPercent              *int64                       `json:"HoldoutPercent"`
	Hook                        *CampaignHook                `json:"Hook"`
	ID                          string                       `json:"Id"`
	IsPaused                    *bool                        `json:"IsPaused"`
	LastModifiedDate            string                       `json:"LastModifiedDate"`
	Limits                      *CampaignLimits              `json:"Limits"`
	MessageConfiguration        *MessageConfiguration        `json:"MessageConfiguration"`
	Name                        *string                      `json:"Name"`
	Priority                    *int64                       `json:"Priority"`
	Schedule                    *Schedule                    `json:"Schedule"`
	SegmentID                   string                       `json:"SegmentId"`
	SegmentVersion              int64                        `json:"SegmentVersion"`
	State                       *CampaignState               `json:"State"`
	TemplateConfiguration       *TemplateConfiguration       `json:"TemplateConfiguration"`
	TreatmentDescription        *string                      `json:"TreatmentDescription"`
	TreatmentName               *string                      `json:"TreatmentName"`
	Version                     *int64                       `json:"Version"`
	Tags                        map[string]string            `json:"tags"`
}
