package shared




type ReviewStatusEnum string

const (
    ReviewStatusEnumPending ReviewStatusEnum = "PENDING"
ReviewStatusEnumFailed ReviewStatusEnum = "FAILED"
ReviewStatusEnumGranted ReviewStatusEnum = "GRANTED"
ReviewStatusEnumDenied ReviewStatusEnum = "DENIED"
)


