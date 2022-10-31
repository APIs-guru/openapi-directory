package shared

type TenancyEnum string

const (
	TenancyEnumDedicated TenancyEnum = "DEDICATED"
	TenancyEnumShared    TenancyEnum = "SHARED"
)
