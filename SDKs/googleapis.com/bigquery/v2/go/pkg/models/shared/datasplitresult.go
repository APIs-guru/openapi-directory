package shared



type DataSplitResult struct {
    EvaluationTable *TableReference `json:"evaluationTable,omitempty"`
    TestTable *TableReference `json:"testTable,omitempty"`
    TrainingTable *TableReference `json:"trainingTable,omitempty"`
    
}

