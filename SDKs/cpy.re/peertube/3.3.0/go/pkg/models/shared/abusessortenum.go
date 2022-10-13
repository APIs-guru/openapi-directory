package shared

type AbusesSortEnum string

const (
	AbusesSortEnumMinusID        AbusesSortEnum = "-id"
	AbusesSortEnumMinusCreatedAt AbusesSortEnum = "-createdAt"
	AbusesSortEnumMinusState     AbusesSortEnum = "-state"
)
