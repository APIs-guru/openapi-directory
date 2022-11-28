from dataclasses import dataclass, field
from enum import Enum

class StudioLifecycleConfigAppTypeEnum(str, Enum):
    JUPYTER_SERVER = "JupyterServer"
    KERNEL_GATEWAY = "KernelGateway"

