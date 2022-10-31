package shared



type LaunchConfiguration struct {
    CopyPrivateIP *bool `json:"copyPrivateIp,omitempty"`
    CopyTags *bool `json:"copyTags,omitempty"`
    Ec2LaunchTemplateID *string `json:"ec2LaunchTemplateID,omitempty"`
    LaunchDisposition *LaunchDispositionEnum `json:"launchDisposition,omitempty"`
    Licensing *Licensing `json:"licensing,omitempty"`
    Name *string `json:"name,omitempty"`
    SourceServerID *string `json:"sourceServerID,omitempty"`
    TargetInstanceTypeRightSizingMethod *TargetInstanceTypeRightSizingMethodEnum `json:"targetInstanceTypeRightSizingMethod,omitempty"`
    
}

