package shared



type LaunchProfileInitialization struct {
    ActiveDirectory *LaunchProfileInitializationActiveDirectory `json:"activeDirectory,omitempty"`
    Ec2SecurityGroupIds []string `json:"ec2SecurityGroupIds,omitempty"`
    LaunchProfileID *string `json:"launchProfileId,omitempty"`
    LaunchProfileProtocolVersion *string `json:"launchProfileProtocolVersion,omitempty"`
    LaunchPurpose *string `json:"launchPurpose,omitempty"`
    Name *string `json:"name,omitempty"`
    Platform *LaunchProfilePlatformEnum `json:"platform,omitempty"`
    SystemInitializationScripts []LaunchProfileInitializationScript `json:"systemInitializationScripts,omitempty"`
    UserInitializationScripts []LaunchProfileInitializationScript `json:"userInitializationScripts,omitempty"`
    
}

