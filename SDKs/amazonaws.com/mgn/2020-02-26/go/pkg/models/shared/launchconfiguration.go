package shared

type LaunchConfiguration struct {
	CopyPrivateIP                       *bool                                    `json:"copyPrivateIp"`
	CopyTags                            *bool                                    `json:"copyTags"`
	Ec2LaunchTemplateID                 *string                                  `json:"ec2LaunchTemplateID"`
	LaunchDisposition                   *LaunchDispositionEnum                   `json:"launchDisposition"`
	Licensing                           *Licensing                               `json:"licensing"`
	Name                                *string                                  `json:"name"`
	SourceServerID                      *string                                  `json:"sourceServerID"`
	TargetInstanceTypeRightSizingMethod *TargetInstanceTypeRightSizingMethodEnum `json:"targetInstanceTypeRightSizingMethod"`
}
