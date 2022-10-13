package shared

type LayerVersionsListItem struct {
	CompatibleRuntimes []RuntimeEnum `json:"CompatibleRuntimes"`
	CreatedDate        *string       `json:"CreatedDate"`
	Description        *string       `json:"Description"`
	LayerVersionArn    *string       `json:"LayerVersionArn"`
	LicenseInfo        *string       `json:"LicenseInfo"`
	Version            *int64        `json:"Version"`
}
