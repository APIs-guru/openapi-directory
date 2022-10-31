package shared

type InputStartingPositionEnum string

const (
	InputStartingPositionEnumNow              InputStartingPositionEnum = "NOW"
	InputStartingPositionEnumTrimHorizon      InputStartingPositionEnum = "TRIM_HORIZON"
	InputStartingPositionEnumLastStoppedPoint InputStartingPositionEnum = "LAST_STOPPED_POINT"
)
