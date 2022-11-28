package shared

// DataSplitResult
// Data split result. This contains references to the training and evaluation data tables that were used to train the model.
type DataSplitResult struct {
	EvaluationTable *TableReference `json:"evaluationTable,omitempty"`
	TestTable       *TableReference `json:"testTable,omitempty"`
	TrainingTable   *TableReference `json:"trainingTable,omitempty"`
}
