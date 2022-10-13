package shared

type JobStatisticsReservationUsage struct {
	Name   *string `json:"name"`
	SlotMs *string `json:"slotMs"`
}

type JobStatistics struct {
	CompletionRatio            *float64                        `json:"completionRatio"`
	Copy                       *JobStatistics5                 `json:"copy"`
	CreationTime               *string                         `json:"creationTime"`
	DataMaskingStatistics      *DataMaskingStatistics          `json:"dataMaskingStatistics"`
	EndTime                    *string                         `json:"endTime"`
	Extract                    *JobStatistics4                 `json:"extract"`
	Load                       *JobStatistics3                 `json:"load"`
	NumChildJobs               *string                         `json:"numChildJobs"`
	ParentJobID                *string                         `json:"parentJobId"`
	Query                      *JobStatistics2                 `json:"query"`
	QuotaDeferments            []string                        `json:"quotaDeferments"`
	ReservationUsage           []JobStatisticsReservationUsage `json:"reservationUsage"`
	ReservationID              *string                         `json:"reservation_id"`
	RowLevelSecurityStatistics *RowLevelSecurityStatistics     `json:"rowLevelSecurityStatistics"`
	ScriptStatistics           *ScriptStatistics               `json:"scriptStatistics"`
	SessionInfo                *SessionInfo                    `json:"sessionInfo"`
	StartTime                  *string                         `json:"startTime"`
	TotalBytesProcessed        *string                         `json:"totalBytesProcessed"`
	TotalSlotMs                *string                         `json:"totalSlotMs"`
	TransactionInfo            *TransactionInfo                `json:"transactionInfo"`
}
