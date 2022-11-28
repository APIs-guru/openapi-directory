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

// ArimaForecastingMetrics
// Model evaluation metrics for ARIMA forecasting models.
type ArimaForecastingMetrics struct {
	ArimaFittingMetrics                []ArimaFittingMetrics                        `json:"arimaFittingMetrics,omitempty"`
	ArimaSingleModelForecastingMetrics []ArimaSingleModelForecastingMetrics         `json:"arimaSingleModelForecastingMetrics,omitempty"`
	HasDrift                           []bool                                       `json:"hasDrift,omitempty"`
	NonSeasonalOrder                   []ArimaOrder                                 `json:"nonSeasonalOrder,omitempty"`
	SeasonalPeriods                    []ArimaForecastingMetricsSeasonalPeriodsEnum `json:"seasonalPeriods,omitempty"`
	TimeSeriesID                       []string                                     `json:"timeSeriesId,omitempty"`
}
