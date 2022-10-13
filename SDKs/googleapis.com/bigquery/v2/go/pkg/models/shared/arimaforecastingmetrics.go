package shared

type ArimaForecastingMetricsSeasonalPeriodsEnum string

const (
	ArimaForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified ArimaForecastingMetricsSeasonalPeriodsEnum = "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
	ArimaForecastingMetricsSeasonalPeriodsEnumNoSeasonality                 ArimaForecastingMetricsSeasonalPeriodsEnum = "NO_SEASONALITY"
	ArimaForecastingMetricsSeasonalPeriodsEnumDaily                         ArimaForecastingMetricsSeasonalPeriodsEnum = "DAILY"
	ArimaForecastingMetricsSeasonalPeriodsEnumWeekly                        ArimaForecastingMetricsSeasonalPeriodsEnum = "WEEKLY"
	ArimaForecastingMetricsSeasonalPeriodsEnumMonthly                       ArimaForecastingMetricsSeasonalPeriodsEnum = "MONTHLY"
	ArimaForecastingMetricsSeasonalPeriodsEnumQuarterly                     ArimaForecastingMetricsSeasonalPeriodsEnum = "QUARTERLY"
	ArimaForecastingMetricsSeasonalPeriodsEnumYearly                        ArimaForecastingMetricsSeasonalPeriodsEnum = "YEARLY"
)

type ArimaForecastingMetrics struct {
	ArimaFittingMetrics                []ArimaFittingMetrics                        `json:"arimaFittingMetrics"`
	ArimaSingleModelForecastingMetrics []ArimaSingleModelForecastingMetrics         `json:"arimaSingleModelForecastingMetrics"`
	HasDrift                           []bool                                       `json:"hasDrift"`
	NonSeasonalOrder                   []ArimaOrder                                 `json:"nonSeasonalOrder"`
	SeasonalPeriods                    []ArimaForecastingMetricsSeasonalPeriodsEnum `json:"seasonalPeriods"`
	TimeSeriesID                       []string                                     `json:"timeSeriesId"`
}
