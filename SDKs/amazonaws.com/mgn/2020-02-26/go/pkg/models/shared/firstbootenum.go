package shared

type FirstBootEnum string

const (
	FirstBootEnumWaiting   FirstBootEnum = "WAITING"
	FirstBootEnumSucceeded FirstBootEnum = "SUCCEEDED"
	FirstBootEnumUnknown   FirstBootEnum = "UNKNOWN"
	FirstBootEnumStopped   FirstBootEnum = "STOPPED"
)
