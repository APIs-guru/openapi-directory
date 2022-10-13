package shared

type ProjectStateEnum string

const (
	ProjectStateEnumNormal    ProjectStateEnum = "NORMAL"
	ProjectStateEnumSyncing   ProjectStateEnum = "SYNCING"
	ProjectStateEnumImporting ProjectStateEnum = "IMPORTING"
)
