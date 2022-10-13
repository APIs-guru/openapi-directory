package shared

type CharityOrg struct {
	CharityOrgID     *string   `json:"charityOrgId"`
	Description      *string   `json:"description"`
	Location         *Location `json:"location"`
	LogoImage        *Image    `json:"logoImage"`
	MissionStatement *string   `json:"missionStatement"`
	Name             *string   `json:"name"`
	RegistrationID   *string   `json:"registrationId"`
	Website          *string   `json:"website"`
}
