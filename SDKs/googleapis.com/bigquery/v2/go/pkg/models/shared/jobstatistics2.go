package shared

type JobStatistics2ReservationUsage struct {
	Name   *string `json:"name"`
	SlotMs *string `json:"slotMs"`
}

type JobStatistics2 struct {
	BiEngineStatistics                  *BiEngineStatistics              `json:"biEngineStatistics"`
	BillingTier                         *int32                           `json:"billingTier"`
	CacheHit                            *bool                            `json:"cacheHit"`
	DdlAffectedRowAccessPolicyCount     *string                          `json:"ddlAffectedRowAccessPolicyCount"`
	DdlDestinationTable                 *TableReference                  `json:"ddlDestinationTable"`
	DdlOperationPerformed               *string                          `json:"ddlOperationPerformed"`
	DdlTargetDataset                    *DatasetReference                `json:"ddlTargetDataset"`
	DdlTargetRoutine                    *RoutineReference                `json:"ddlTargetRoutine"`
	DdlTargetRowAccessPolicy            *RowAccessPolicyReference        `json:"ddlTargetRowAccessPolicy"`
	DdlTargetTable                      *TableReference                  `json:"ddlTargetTable"`
	DmlStats                            *DmlStatistics                   `json:"dmlStats"`
	EstimatedBytesProcessed             *string                          `json:"estimatedBytesProcessed"`
	MlStatistics                        *MlStatistics                    `json:"mlStatistics"`
	ModelTraining                       *BigQueryModelTraining           `json:"modelTraining"`
	ModelTrainingCurrentIteration       *int32                           `json:"modelTrainingCurrentIteration"`
	ModelTrainingExpectedTotalIteration *string                          `json:"modelTrainingExpectedTotalIteration"`
	NumDmlAffectedRows                  *string                          `json:"numDmlAffectedRows"`
	QueryPlan                           []ExplainQueryStage              `json:"queryPlan"`
	ReferencedRoutines                  []RoutineReference               `json:"referencedRoutines"`
	ReferencedTables                    []TableReference                 `json:"referencedTables"`
	ReservationUsage                    []JobStatistics2ReservationUsage `json:"reservationUsage"`
	Schema                              *TableSchema                     `json:"schema"`
	SearchStatistics                    *SearchStatistics                `json:"searchStatistics"`
	SparkStatistics                     *SparkStatistics                 `json:"sparkStatistics"`
	StatementType                       *string                          `json:"statementType"`
	Timeline                            []QueryTimelineSample            `json:"timeline"`
	TotalBytesBilled                    *string                          `json:"totalBytesBilled"`
	TotalBytesProcessed                 *string                          `json:"totalBytesProcessed"`
	TotalBytesProcessedAccuracy         *string                          `json:"totalBytesProcessedAccuracy"`
	TotalPartitionsProcessed            *string                          `json:"totalPartitionsProcessed"`
	TotalSlotMs                         *string                          `json:"totalSlotMs"`
	TransferredBytes                    *string                          `json:"transferredBytes"`
	UndeclaredQueryParameters           []QueryParameter                 `json:"undeclaredQueryParameters"`
}
