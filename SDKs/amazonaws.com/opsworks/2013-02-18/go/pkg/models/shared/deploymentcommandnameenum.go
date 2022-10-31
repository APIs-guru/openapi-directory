package shared




type DeploymentCommandNameEnum string

const (
    DeploymentCommandNameEnumInstallDependencies DeploymentCommandNameEnum = "install_dependencies"
DeploymentCommandNameEnumUpdateDependencies DeploymentCommandNameEnum = "update_dependencies"
DeploymentCommandNameEnumUpdateCustomCookbooks DeploymentCommandNameEnum = "update_custom_cookbooks"
DeploymentCommandNameEnumExecuteRecipes DeploymentCommandNameEnum = "execute_recipes"
DeploymentCommandNameEnumConfigure DeploymentCommandNameEnum = "configure"
DeploymentCommandNameEnumSetup DeploymentCommandNameEnum = "setup"
DeploymentCommandNameEnumDeploy DeploymentCommandNameEnum = "deploy"
DeploymentCommandNameEnumRollback DeploymentCommandNameEnum = "rollback"
DeploymentCommandNameEnumStart DeploymentCommandNameEnum = "start"
DeploymentCommandNameEnumStop DeploymentCommandNameEnum = "stop"
DeploymentCommandNameEnumRestart DeploymentCommandNameEnum = "restart"
DeploymentCommandNameEnumUndeploy DeploymentCommandNameEnum = "undeploy"
)


