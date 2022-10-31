package shared

type UsersSortEnum string

const (
	UsersSortEnumMinusID        UsersSortEnum = "-id"
	UsersSortEnumMinusUsername  UsersSortEnum = "-username"
	UsersSortEnumMinusCreatedAt UsersSortEnum = "-createdAt"
)
