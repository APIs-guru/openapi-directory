package shared

type ReplicaModeEnum string

const (
	ReplicaModeEnumOpenReadOnly ReplicaModeEnum = "open-read-only"
	ReplicaModeEnumMounted      ReplicaModeEnum = "mounted"
)
