package shared

type DbInstanceMessage struct {
	DbInstances []DbInstance
	Marker      *string
}
