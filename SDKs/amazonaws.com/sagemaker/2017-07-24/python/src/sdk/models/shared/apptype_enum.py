from dataclasses import dataclass, field
from typing import Enum

class AppTypeEnum(str, Enum):
    JUPYTER_SERVER = "JupyterServer"
    KERNEL_GATEWAY = "KernelGateway"
    TENSOR_BOARD = "TensorBoard"

