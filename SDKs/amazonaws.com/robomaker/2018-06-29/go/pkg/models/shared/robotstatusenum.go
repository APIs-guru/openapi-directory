package shared




type RobotStatusEnum string

const (
    RobotStatusEnumAvailable RobotStatusEnum = "Available"
RobotStatusEnumRegistered RobotStatusEnum = "Registered"
RobotStatusEnumPendingNewDeployment RobotStatusEnum = "PendingNewDeployment"
RobotStatusEnumDeploying RobotStatusEnum = "Deploying"
RobotStatusEnumFailed RobotStatusEnum = "Failed"
RobotStatusEnumInSync RobotStatusEnum = "InSync"
RobotStatusEnumNoResponse RobotStatusEnum = "NoResponse"
)


