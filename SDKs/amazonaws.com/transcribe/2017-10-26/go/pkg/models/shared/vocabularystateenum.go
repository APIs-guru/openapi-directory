package shared

type VocabularyStateEnum string

const (
	VocabularyStateEnumPending VocabularyStateEnum = "PENDING"
	VocabularyStateEnumReady   VocabularyStateEnum = "READY"
	VocabularyStateEnumFailed  VocabularyStateEnum = "FAILED"
)
