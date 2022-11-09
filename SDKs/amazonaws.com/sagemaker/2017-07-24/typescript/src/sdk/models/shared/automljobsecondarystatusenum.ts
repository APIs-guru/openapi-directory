

export enum AutoMlJobSecondaryStatusEnum {
    Starting = "Starting"
,    AnalyzingData = "AnalyzingData"
,    FeatureEngineering = "FeatureEngineering"
,    ModelTuning = "ModelTuning"
,    MaxCandidatesReached = "MaxCandidatesReached"
,    Failed = "Failed"
,    Stopped = "Stopped"
,    MaxAutoMlJobRuntimeReached = "MaxAutoMLJobRuntimeReached"
,    Stopping = "Stopping"
,    CandidateDefinitionsGenerated = "CandidateDefinitionsGenerated"
,    GeneratingExplainabilityReport = "GeneratingExplainabilityReport"
,    Completed = "Completed"
,    ExplainabilityError = "ExplainabilityError"
,    DeployingModel = "DeployingModel"
,    ModelDeploymentError = "ModelDeploymentError"
}
