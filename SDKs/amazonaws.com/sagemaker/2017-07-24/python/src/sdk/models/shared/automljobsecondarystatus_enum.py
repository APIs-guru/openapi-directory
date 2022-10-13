from dataclasses import dataclass, field
from typing import Enum

class AutoMlJobSecondaryStatusEnum(str, Enum):
    STARTING = "Starting"
    ANALYZING_DATA = "AnalyzingData"
    FEATURE_ENGINEERING = "FeatureEngineering"
    MODEL_TUNING = "ModelTuning"
    MAX_CANDIDATES_REACHED = "MaxCandidatesReached"
    FAILED = "Failed"
    STOPPED = "Stopped"
    MAX_AUTO_ML_JOB_RUNTIME_REACHED = "MaxAutoMLJobRuntimeReached"
    STOPPING = "Stopping"
    CANDIDATE_DEFINITIONS_GENERATED = "CandidateDefinitionsGenerated"
    GENERATING_EXPLAINABILITY_REPORT = "GeneratingExplainabilityReport"
    COMPLETED = "Completed"
    EXPLAINABILITY_ERROR = "ExplainabilityError"
    DEPLOYING_MODEL = "DeployingModel"
    MODEL_DEPLOYMENT_ERROR = "ModelDeploymentError"

