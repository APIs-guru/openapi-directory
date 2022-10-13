package shared

type ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum string

const (
	ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
	ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumNoSeasonality                 ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "NO_SEASONALITY"
	ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumDaily                         ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "DAILY"
	ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumWeekly                        ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "WEEKLY"
	ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumMonthly                       ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "MONTHLY"
	ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumQuarterly                     ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "QUARTERLY"
	ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumYearly                        ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "YEARLY"
)

type ArimaSingleModelForecastingMetrics struct {
	ArimaFittingMetrics *ArimaFittingMetrics                                    `json:"arimaFittingMetrics"`
	HasDrift            *bool                                                   `json:"hasDrift"`
	HasHolidayEffect    *bool                                                   `json:"hasHolidayEffect"`
	HasSpikesAndDips    *bool                                                   `json:"hasSpikesAndDips"`
	HasStepChanges      *bool                                                   `json:"hasStepChanges"`
	NonSeasonalOrder    *ArimaOrder                                             `json:"nonSeasonalOrder"`
	SeasonalPeriods     []ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum `json:"seasonalPeriods"`
	TimeSeriesID        *string                                                 `json:"timeSeriesId"`
	TimeSeriesIds       []string                                                `json:"timeSeriesIds"`
}
