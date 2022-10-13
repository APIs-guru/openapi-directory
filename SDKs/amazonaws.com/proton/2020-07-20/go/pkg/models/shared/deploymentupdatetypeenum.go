package shared

type DeploymentUpdateTypeEnum string

const (
	DeploymentUpdateTypeEnumNone           DeploymentUpdateTypeEnum = "NONE"
	DeploymentUpdateTypeEnumCurrentVersion DeploymentUpdateTypeEnum = "CURRENT_VERSION"
	DeploymentUpdateTypeEnumMinorVersion   DeploymentUpdateTypeEnum = "MINOR_VERSION"
	DeploymentUpdateTypeEnumMajorVersion   DeploymentUpdateTypeEnum = "MAJOR_VERSION"
)
