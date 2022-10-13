package shared

type S3JobDefinition struct {
	BucketCriteria    *S3BucketCriteriaForJob    `json:"bucketCriteria"`
	BucketDefinitions []S3BucketDefinitionForJob `json:"bucketDefinitions"`
	Scoping           *Scoping                   `json:"scoping"`
}
