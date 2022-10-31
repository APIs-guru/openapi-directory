package shared




type RequestStatusEnum string

const (
    RequestStatusEnumPending RequestStatusEnum = "PENDING"
RequestStatusEnumCaseOpened RequestStatusEnum = "CASE_OPENED"
RequestStatusEnumApproved RequestStatusEnum = "APPROVED"
RequestStatusEnumDenied RequestStatusEnum = "DENIED"
RequestStatusEnumCaseClosed RequestStatusEnum = "CASE_CLOSED"
)


