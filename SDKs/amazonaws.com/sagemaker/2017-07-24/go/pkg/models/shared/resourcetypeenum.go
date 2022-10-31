package shared




type ResourceTypeEnum string

const (
    ResourceTypeEnumTrainingJob ResourceTypeEnum = "TrainingJob"
ResourceTypeEnumExperiment ResourceTypeEnum = "Experiment"
ResourceTypeEnumExperimentTrial ResourceTypeEnum = "ExperimentTrial"
ResourceTypeEnumExperimentTrialComponent ResourceTypeEnum = "ExperimentTrialComponent"
ResourceTypeEnumEndpoint ResourceTypeEnum = "Endpoint"
ResourceTypeEnumModelPackage ResourceTypeEnum = "ModelPackage"
ResourceTypeEnumModelPackageGroup ResourceTypeEnum = "ModelPackageGroup"
ResourceTypeEnumPipeline ResourceTypeEnum = "Pipeline"
ResourceTypeEnumPipelineExecution ResourceTypeEnum = "PipelineExecution"
ResourceTypeEnumFeatureGroup ResourceTypeEnum = "FeatureGroup"
ResourceTypeEnumProject ResourceTypeEnum = "Project"
)


