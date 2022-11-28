package shared

// MetricStat
// This structure defines the metric to be returned, along with the statistics, period, and units.
type MetricStat struct {
	Metric Metric
	Period int64
	Stat   string
	Unit   *StandardUnitEnum
}
