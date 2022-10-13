package shared

type AutoMlJobSecondaryStatusEnum string

const (
	AutoMlJobSecondaryStatusEnumStarting                       AutoMlJobSecondaryStatusEnum = "Starting"
	AutoMlJobSecondaryStatusEnumAnalyzingData                  AutoMlJobSecondaryStatusEnum = "AnalyzingData"
	AutoMlJobSecondaryStatusEnumFeatureEngineering             AutoMlJobSecondaryStatusEnum = "FeatureEngineering"
	AutoMlJobSecondaryStatusEnumModelTuning                    AutoMlJobSecondaryStatusEnum = "ModelTuning"
	AutoMlJobSecondaryStatusEnumMaxCandidatesReached           AutoMlJobSecondaryStatusEnum = "MaxCandidatesReached"
	AutoMlJobSecondaryStatusEnumFailed                         AutoMlJobSecondaryStatusEnum = "Failed"
	AutoMlJobSecondaryStatusEnumStopped                        AutoMlJobSecondaryStatusEnum = "Stopped"
	AutoMlJobSecondaryStatusEnumMaxAutoMlJobRuntimeReached     AutoMlJobSecondaryStatusEnum = "MaxAutoMLJobRuntimeReached"
	AutoMlJobSecondaryStatusEnumStopping                       AutoMlJobSecondaryStatusEnum = "Stopping"
	AutoMlJobSecondaryStatusEnumCandidateDefinitionsGenerated  AutoMlJobSecondaryStatusEnum = "CandidateDefinitionsGenerated"
	AutoMlJobSecondaryStatusEnumGeneratingExplainabilityReport AutoMlJobSecondaryStatusEnum = "GeneratingExplainabilityReport"
	AutoMlJobSecondaryStatusEnumCompleted                      AutoMlJobSecondaryStatusEnum = "Completed"
	AutoMlJobSecondaryStatusEnumExplainabilityError            AutoMlJobSecondaryStatusEnum = "ExplainabilityError"
	AutoMlJobSecondaryStatusEnumDeployingModel                 AutoMlJobSecondaryStatusEnum = "DeployingModel"
	AutoMlJobSecondaryStatusEnumModelDeploymentError           AutoMlJobSecondaryStatusEnum = "ModelDeploymentError"
)
