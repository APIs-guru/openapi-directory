package shared

type WebPropertySummary struct {
	ID                    *string          `json:"id"`
	InternalWebPropertyID *string          `json:"internalWebPropertyId"`
	Kind                  *string          `json:"kind"`
	Level                 *string          `json:"level"`
	Name                  *string          `json:"name"`
	Profiles              []ProfileSummary `json:"profiles"`
	Starred               *bool            `json:"starred"`
	WebsiteURL            *string          `json:"websiteUrl"`
}
