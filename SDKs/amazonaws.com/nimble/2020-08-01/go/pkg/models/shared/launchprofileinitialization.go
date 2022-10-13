package shared

type LaunchProfileInitialization struct {
	ActiveDirectory              *LaunchProfileInitializationActiveDirectory `json:"activeDirectory"`
	Ec2SecurityGroupIds          []string                                    `json:"ec2SecurityGroupIds"`
	LaunchProfileID              *string                                     `json:"launchProfileId"`
	LaunchProfileProtocolVersion *string                                     `json:"launchProfileProtocolVersion"`
	LaunchPurpose                *string                                     `json:"launchPurpose"`
	Name                         *string                                     `json:"name"`
	Platform                     *LaunchProfilePlatformEnum                  `json:"platform"`
	SystemInitializationScripts  []LaunchProfileInitializationScript         `json:"systemInitializationScripts"`
	UserInitializationScripts    []LaunchProfileInitializationScript         `json:"userInitializationScripts"`
}
