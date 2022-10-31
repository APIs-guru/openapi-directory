package shared




type ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum string

const (
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumSeasonalPeriodTypeUnspecified ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumNoSeasonality ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "NO_SEASONALITY"
ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumDaily ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "DAILY"
ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumWeekly ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "WEEKLY"
ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumMonthly ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "MONTHLY"
ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumQuarterly ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "QUARTERLY"
ArimaSingleModelForecastingMetricsSeasonalPeriodsEnumYearly ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = "YEARLY"
)


type ArimaSingleModelForecastingMetrics struct {
    ArimaFittingMetrics *ArimaFittingMetrics `json:"arimaFittingMetrics,omitempty"`
    HasDrift *bool `json:"hasDrift,omitempty"`
    HasHolidayEffect *bool `json:"hasHolidayEffect,omitempty"`
    HasSpikesAndDips *bool `json:"hasSpikesAndDips,omitempty"`
    HasStepChanges *bool `json:"hasStepChanges,omitempty"`
    NonSeasonalOrder *ArimaOrder `json:"nonSeasonalOrder,omitempty"`
    SeasonalPeriods []ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum `json:"seasonalPeriods,omitempty"`
    TimeSeriesID *string `json:"timeSeriesId,omitempty"`
    TimeSeriesIds []string `json:"timeSeriesIds,omitempty"`
    
}

