package shared

type StreamHealthEnum string

const (
	StreamHealthEnumHealthy  StreamHealthEnum = "HEALTHY"
	StreamHealthEnumStarving StreamHealthEnum = "STARVING"
	StreamHealthEnumUnknown  StreamHealthEnum = "UNKNOWN"
)
