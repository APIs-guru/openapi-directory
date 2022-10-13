package shared

type CreateCompilationJobRequest struct {
	CompilationJobName string            `json:"CompilationJobName"`
	InputConfig        InputConfig       `json:"InputConfig"`
	OutputConfig       OutputConfig      `json:"OutputConfig"`
	RoleArn            string            `json:"RoleArn"`
	StoppingCondition  StoppingCondition `json:"StoppingCondition"`
	Tags               []Tag             `json:"Tags"`
	VpcConfig          *NeoVpcConfig     `json:"VpcConfig"`
}
