package shared

type ServerLaunchConfiguration struct {
	AssociatePublicIPAddress *bool           `json:"associatePublicIpAddress"`
	ConfigureScript          *S3Location     `json:"configureScript"`
	ConfigureScriptType      *ScriptTypeEnum `json:"configureScriptType"`
	Ec2KeyName               *string         `json:"ec2KeyName"`
	IamInstanceProfileName   *string         `json:"iamInstanceProfileName"`
	InstanceType             *string         `json:"instanceType"`
	LogicalID                *string         `json:"logicalId"`
	SecurityGroup            *string         `json:"securityGroup"`
	Server                   *Server         `json:"server"`
	Subnet                   *string         `json:"subnet"`
	UserData                 *UserData       `json:"userData"`
	Vpc                      *string         `json:"vpc"`
}
