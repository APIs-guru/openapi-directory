package shared

type JourneyResponse struct {
	Activities             map[string]Activity `json:"Activities"`
	ApplicationID          string              `json:"ApplicationId"`
	CreationDate           *string             `json:"CreationDate"`
	ID                     string              `json:"Id"`
	LastModifiedDate       *string             `json:"LastModifiedDate"`
	Limits                 *JourneyLimits      `json:"Limits"`
	LocalTime              *bool               `json:"LocalTime"`
	Name                   string              `json:"Name"`
	QuietTime              *QuietTime          `json:"QuietTime"`
	RefreshFrequency       *string             `json:"RefreshFrequency"`
	RefreshOnSegmentUpdate *bool               `json:"RefreshOnSegmentUpdate"`
	Schedule               *JourneySchedule    `json:"Schedule"`
	StartActivity          *string             `json:"StartActivity"`
	StartCondition         *StartCondition     `json:"StartCondition"`
	State                  *StateEnum          `json:"State"`
	WaitForQuietTime       *bool               `json:"WaitForQuietTime"`
	Tags                   map[string]string   `json:"tags"`
}
