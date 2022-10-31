package shared




type EventSourcePositionEnum string

const (
    EventSourcePositionEnumTrimHorizon EventSourcePositionEnum = "TRIM_HORIZON"
EventSourcePositionEnumLatest EventSourcePositionEnum = "LATEST"
EventSourcePositionEnumAtTimestamp EventSourcePositionEnum = "AT_TIMESTAMP"
)


