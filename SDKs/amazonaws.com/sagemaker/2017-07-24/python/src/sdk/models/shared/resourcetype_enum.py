from dataclasses import dataclass, field
from enum import Enum

class ResourceTypeEnum(str, Enum):
    TRAINING_JOB = "TrainingJob"
    EXPERIMENT = "Experiment"
    EXPERIMENT_TRIAL = "ExperimentTrial"
    EXPERIMENT_TRIAL_COMPONENT = "ExperimentTrialComponent"
    ENDPOINT = "Endpoint"
    MODEL_PACKAGE = "ModelPackage"
    MODEL_PACKAGE_GROUP = "ModelPackageGroup"
    PIPELINE = "Pipeline"
    PIPELINE_EXECUTION = "PipelineExecution"
    FEATURE_GROUP = "FeatureGroup"
    PROJECT = "Project"

