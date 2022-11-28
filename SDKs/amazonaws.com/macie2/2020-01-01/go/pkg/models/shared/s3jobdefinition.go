package shared

// S3JobDefinition
// Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
type S3JobDefinition struct {
	BucketCriteria    *S3BucketCriteriaForJob    `json:"bucketCriteria,omitempty"`
	BucketDefinitions []S3BucketDefinitionForJob `json:"bucketDefinitions,omitempty"`
	Scoping           *Scoping                   `json:"scoping,omitempty"`
}
