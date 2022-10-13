from dataclasses import dataclass, field
from typing import Enum

class StudioLifecycleConfigAppTypeEnum(str, Enum):
    JUPYTER_SERVER = "JupyterServer"
    KERNEL_GATEWAY = "KernelGateway"

