package shared

type PatchActionEnum string

const (
	PatchActionEnumAllowAsDependency PatchActionEnum = "ALLOW_AS_DEPENDENCY"
	PatchActionEnumBlock             PatchActionEnum = "BLOCK"
)
