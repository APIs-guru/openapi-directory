package shared

type EnvironmentAccessModel struct {
	EnvironmentAccessType *EnvironmentAccessTypeEnum `json:"environmentAccessType"`
	EnvironmentID         *string                    `json:"environmentId"`
	Name                  *string                    `json:"name"`
}
