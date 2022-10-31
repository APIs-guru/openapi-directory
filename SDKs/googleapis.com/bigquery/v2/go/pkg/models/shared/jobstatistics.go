package shared



type JobStatisticsReservationUsage struct {
    Name *string `json:"name,omitempty"`
    SlotMs *string `json:"slotMs,omitempty"`
    
}

type JobStatistics struct {
    CompletionRatio *float64 `json:"completionRatio,omitempty"`
    Copy *JobStatistics5 `json:"copy,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    DataMaskingStatistics *DataMaskingStatistics `json:"dataMaskingStatistics,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Extract *JobStatistics4 `json:"extract,omitempty"`
    Load *JobStatistics3 `json:"load,omitempty"`
    NumChildJobs *string `json:"numChildJobs,omitempty"`
    ParentJobID *string `json:"parentJobId,omitempty"`
    Query *JobStatistics2 `json:"query,omitempty"`
    QuotaDeferments []string `json:"quotaDeferments,omitempty"`
    ReservationUsage []JobStatisticsReservationUsage `json:"reservationUsage,omitempty"`
    ReservationID *string `json:"reservation_id,omitempty"`
    RowLevelSecurityStatistics *RowLevelSecurityStatistics `json:"rowLevelSecurityStatistics,omitempty"`
    ScriptStatistics *ScriptStatistics `json:"scriptStatistics,omitempty"`
    SessionInfo *SessionInfo `json:"sessionInfo,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    TotalBytesProcessed *string `json:"totalBytesProcessed,omitempty"`
    TotalSlotMs *string `json:"totalSlotMs,omitempty"`
    TransactionInfo *TransactionInfo `json:"transactionInfo,omitempty"`
    
}

