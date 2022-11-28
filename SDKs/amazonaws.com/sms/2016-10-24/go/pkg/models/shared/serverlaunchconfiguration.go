package shared

// ServerLaunchConfiguration
// Launch configuration for a server.
type ServerLaunchConfiguration struct {
	AssociatePublicIPAddress *bool           `json:"associatePublicIpAddress,omitempty"`
	ConfigureScript          *S3Location     `json:"configureScript,omitempty"`
	ConfigureScriptType      *ScriptTypeEnum `json:"configureScriptType,omitempty"`
	Ec2KeyName               *string         `json:"ec2KeyName,omitempty"`
	IamInstanceProfileName   *string         `json:"iamInstanceProfileName,omitempty"`
	InstanceType             *string         `json:"instanceType,omitempty"`
	LogicalID                *string         `json:"logicalId,omitempty"`
	SecurityGroup            *string         `json:"securityGroup,omitempty"`
	Server                   *Server         `json:"server,omitempty"`
	Subnet                   *string         `json:"subnet,omitempty"`
	UserData                 *UserData       `json:"userData,omitempty"`
	Vpc                      *string         `json:"vpc,omitempty"`
}
