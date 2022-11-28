from dataclasses import dataclass, field
from enum import Enum

class SecondaryStatusEnum(str, Enum):
    STARTING = "Starting"
    LAUNCHING_ML_INSTANCES = "LaunchingMLInstances"
    PREPARING_TRAINING_STACK = "PreparingTrainingStack"
    DOWNLOADING = "Downloading"
    DOWNLOADING_TRAINING_IMAGE = "DownloadingTrainingImage"
    TRAINING = "Training"
    UPLOADING = "Uploading"
    STOPPING = "Stopping"
    STOPPED = "Stopped"
    MAX_RUNTIME_EXCEEDED = "MaxRuntimeExceeded"
    COMPLETED = "Completed"
    FAILED = "Failed"
    INTERRUPTED = "Interrupted"
    MAX_WAIT_TIME_EXCEEDED = "MaxWaitTimeExceeded"
    UPDATING = "Updating"
    RESTARTING = "Restarting"

