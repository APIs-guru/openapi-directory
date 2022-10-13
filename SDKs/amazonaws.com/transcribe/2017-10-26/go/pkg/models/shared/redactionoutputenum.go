package shared

type RedactionOutputEnum string

const (
	RedactionOutputEnumRedacted              RedactionOutputEnum = "redacted"
	RedactionOutputEnumRedactedAndUnredacted RedactionOutputEnum = "redacted_and_unredacted"
)
