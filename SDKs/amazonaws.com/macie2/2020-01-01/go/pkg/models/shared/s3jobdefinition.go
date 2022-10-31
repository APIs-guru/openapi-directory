package shared



type S3JobDefinition struct {
    BucketCriteria *S3BucketCriteriaForJob `json:"bucketCriteria,omitempty"`
    BucketDefinitions []S3BucketDefinitionForJob `json:"bucketDefinitions,omitempty"`
    Scoping *Scoping `json:"scoping,omitempty"`
    
}

