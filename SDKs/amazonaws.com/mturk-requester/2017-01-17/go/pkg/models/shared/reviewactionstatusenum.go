package shared

type ReviewActionStatusEnum string

const (
	ReviewActionStatusEnumIntended  ReviewActionStatusEnum = "Intended"
	ReviewActionStatusEnumSucceeded ReviewActionStatusEnum = "Succeeded"
	ReviewActionStatusEnumFailed    ReviewActionStatusEnum = "Failed"
	ReviewActionStatusEnumCancelled ReviewActionStatusEnum = "Cancelled"
)
