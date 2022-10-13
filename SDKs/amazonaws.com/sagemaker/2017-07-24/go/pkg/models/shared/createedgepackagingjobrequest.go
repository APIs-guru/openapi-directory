package shared

type CreateEdgePackagingJobRequest struct {
	CompilationJobName   string           `json:"CompilationJobName"`
	EdgePackagingJobName string           `json:"EdgePackagingJobName"`
	ModelName            string           `json:"ModelName"`
	ModelVersion         string           `json:"ModelVersion"`
	OutputConfig         EdgeOutputConfig `json:"OutputConfig"`
	ResourceKey          *string          `json:"ResourceKey"`
	RoleArn              string           `json:"RoleArn"`
	Tags                 []Tag            `json:"Tags"`
}
