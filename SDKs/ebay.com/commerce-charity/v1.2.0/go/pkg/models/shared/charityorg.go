package shared

type CharityOrg struct {
	CharityOrgID     *string   `json:"charityOrgId,omitempty"`
	Description      *string   `json:"description,omitempty"`
	Location         *Location `json:"location,omitempty"`
	LogoImage        *Image    `json:"logoImage,omitempty"`
	MissionStatement *string   `json:"missionStatement,omitempty"`
	Name             *string   `json:"name,omitempty"`
	RegistrationID   *string   `json:"registrationId,omitempty"`
	Website          *string   `json:"website,omitempty"`
}
