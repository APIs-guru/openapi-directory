from dataclasses import dataclass, field
from typing import Enum

class DeploymentCommandNameEnum(str, Enum):
    INSTALL_DEPENDENCIES = "install_dependencies"
    UPDATE_DEPENDENCIES = "update_dependencies"
    UPDATE_CUSTOM_COOKBOOKS = "update_custom_cookbooks"
    EXECUTE_RECIPES = "execute_recipes"
    CONFIGURE = "configure"
    SETUP = "setup"
    DEPLOY = "deploy"
    ROLLBACK = "rollback"
    START = "start"
    STOP = "stop"
    RESTART = "restart"
    UNDEPLOY = "undeploy"

