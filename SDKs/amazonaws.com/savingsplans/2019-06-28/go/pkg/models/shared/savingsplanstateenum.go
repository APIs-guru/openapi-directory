package shared




type SavingsPlanStateEnum string

const (
    SavingsPlanStateEnumPaymentPending SavingsPlanStateEnum = "payment-pending"
SavingsPlanStateEnumPaymentFailed SavingsPlanStateEnum = "payment-failed"
SavingsPlanStateEnumActive SavingsPlanStateEnum = "active"
SavingsPlanStateEnumRetired SavingsPlanStateEnum = "retired"
SavingsPlanStateEnumQueued SavingsPlanStateEnum = "queued"
SavingsPlanStateEnumQueuedDeleted SavingsPlanStateEnum = "queued-deleted"
)


