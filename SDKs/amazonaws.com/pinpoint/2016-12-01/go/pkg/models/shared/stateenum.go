package shared




type StateEnum string

const (
    StateEnumDraft StateEnum = "DRAFT"
StateEnumActive StateEnum = "ACTIVE"
StateEnumCompleted StateEnum = "COMPLETED"
StateEnumCancelled StateEnum = "CANCELLED"
StateEnumClosed StateEnum = "CLOSED"
StateEnumPaused StateEnum = "PAUSED"
)


