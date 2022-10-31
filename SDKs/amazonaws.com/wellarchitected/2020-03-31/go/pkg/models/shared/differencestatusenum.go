package shared

type DifferenceStatusEnum string

const (
	DifferenceStatusEnumUpdated DifferenceStatusEnum = "UPDATED"
	DifferenceStatusEnumNew     DifferenceStatusEnum = "NEW"
	DifferenceStatusEnumDeleted DifferenceStatusEnum = "DELETED"
)
