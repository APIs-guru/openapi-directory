from dataclasses import dataclass, field
from enum import Enum

class FrameworkEnum(str, Enum):
    TENSORFLOW = "TENSORFLOW"
    KERAS = "KERAS"
    MXNET = "MXNET"
    ONNX = "ONNX"
    PYTORCH = "PYTORCH"
    XGBOOST = "XGBOOST"
    TFLITE = "TFLITE"
    DARKNET = "DARKNET"
    SKLEARN = "SKLEARN"

