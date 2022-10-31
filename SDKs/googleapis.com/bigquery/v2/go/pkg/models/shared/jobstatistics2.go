package shared



type JobStatistics2ReservationUsage struct {
    Name *string `json:"name,omitempty"`
    SlotMs *string `json:"slotMs,omitempty"`
    
}

type JobStatistics2 struct {
    BiEngineStatistics *BiEngineStatistics `json:"biEngineStatistics,omitempty"`
    BillingTier *int32 `json:"billingTier,omitempty"`
    CacheHit *bool `json:"cacheHit,omitempty"`
    DdlAffectedRowAccessPolicyCount *string `json:"ddlAffectedRowAccessPolicyCount,omitempty"`
    DdlDestinationTable *TableReference `json:"ddlDestinationTable,omitempty"`
    DdlOperationPerformed *string `json:"ddlOperationPerformed,omitempty"`
    DdlTargetDataset *DatasetReference `json:"ddlTargetDataset,omitempty"`
    DdlTargetRoutine *RoutineReference `json:"ddlTargetRoutine,omitempty"`
    DdlTargetRowAccessPolicy *RowAccessPolicyReference `json:"ddlTargetRowAccessPolicy,omitempty"`
    DdlTargetTable *TableReference `json:"ddlTargetTable,omitempty"`
    DmlStats *DmlStatistics `json:"dmlStats,omitempty"`
    EstimatedBytesProcessed *string `json:"estimatedBytesProcessed,omitempty"`
    MlStatistics *MlStatistics `json:"mlStatistics,omitempty"`
    ModelTraining *BigQueryModelTraining `json:"modelTraining,omitempty"`
    ModelTrainingCurrentIteration *int32 `json:"modelTrainingCurrentIteration,omitempty"`
    ModelTrainingExpectedTotalIteration *string `json:"modelTrainingExpectedTotalIteration,omitempty"`
    NumDmlAffectedRows *string `json:"numDmlAffectedRows,omitempty"`
    QueryPlan []ExplainQueryStage `json:"queryPlan,omitempty"`
    ReferencedRoutines []RoutineReference `json:"referencedRoutines,omitempty"`
    ReferencedTables []TableReference `json:"referencedTables,omitempty"`
    ReservationUsage []JobStatistics2ReservationUsage `json:"reservationUsage,omitempty"`
    Schema *TableSchema `json:"schema,omitempty"`
    SearchStatistics *SearchStatistics `json:"searchStatistics,omitempty"`
    SparkStatistics *SparkStatistics `json:"sparkStatistics,omitempty"`
    StatementType *string `json:"statementType,omitempty"`
    Timeline []QueryTimelineSample `json:"timeline,omitempty"`
    TotalBytesBilled *string `json:"totalBytesBilled,omitempty"`
    TotalBytesProcessed *string `json:"totalBytesProcessed,omitempty"`
    TotalBytesProcessedAccuracy *string `json:"totalBytesProcessedAccuracy,omitempty"`
    TotalPartitionsProcessed *string `json:"totalPartitionsProcessed,omitempty"`
    TotalSlotMs *string `json:"totalSlotMs,omitempty"`
    TransferredBytes *string `json:"transferredBytes,omitempty"`
    UndeclaredQueryParameters []QueryParameter `json:"undeclaredQueryParameters,omitempty"`
    
}

