package shared

type DataSplitResult struct {
	EvaluationTable *TableReference `json:"evaluationTable"`
	TestTable       *TableReference `json:"testTable"`
	TrainingTable   *TableReference `json:"trainingTable"`
}
