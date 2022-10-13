package shared

type PublishLayerVersionResponse struct {
	CompatibleRuntimes []RuntimeEnum              `json:"CompatibleRuntimes"`
	Content            *LayerVersionContentOutput `json:"Content"`
	CreatedDate        *string                    `json:"CreatedDate"`
	Description        *string                    `json:"Description"`
	LayerArn           *string                    `json:"LayerArn"`
	LayerVersionArn    *string                    `json:"LayerVersionArn"`
	LicenseInfo        *string                    `json:"LicenseInfo"`
	Version            *int64                     `json:"Version"`
}
