package shared




type MetricMetadataBlockedReasonsEnum string

const (
    MetricMetadataBlockedReasonsEnumBlockedReasonUnspecified MetricMetadataBlockedReasonsEnum = "BLOCKED_REASON_UNSPECIFIED"
MetricMetadataBlockedReasonsEnumNoRevenueMetrics MetricMetadataBlockedReasonsEnum = "NO_REVENUE_METRICS"
MetricMetadataBlockedReasonsEnumNoCostMetrics MetricMetadataBlockedReasonsEnum = "NO_COST_METRICS"
)



type MetricMetadataTypeEnum string

const (
    MetricMetadataTypeEnumMetricTypeUnspecified MetricMetadataTypeEnum = "METRIC_TYPE_UNSPECIFIED"
MetricMetadataTypeEnumTypeInteger MetricMetadataTypeEnum = "TYPE_INTEGER"
MetricMetadataTypeEnumTypeFloat MetricMetadataTypeEnum = "TYPE_FLOAT"
MetricMetadataTypeEnumTypeSeconds MetricMetadataTypeEnum = "TYPE_SECONDS"
MetricMetadataTypeEnumTypeMilliseconds MetricMetadataTypeEnum = "TYPE_MILLISECONDS"
MetricMetadataTypeEnumTypeMinutes MetricMetadataTypeEnum = "TYPE_MINUTES"
MetricMetadataTypeEnumTypeHours MetricMetadataTypeEnum = "TYPE_HOURS"
MetricMetadataTypeEnumTypeStandard MetricMetadataTypeEnum = "TYPE_STANDARD"
MetricMetadataTypeEnumTypeCurrency MetricMetadataTypeEnum = "TYPE_CURRENCY"
MetricMetadataTypeEnumTypeFeet MetricMetadataTypeEnum = "TYPE_FEET"
MetricMetadataTypeEnumTypeMiles MetricMetadataTypeEnum = "TYPE_MILES"
MetricMetadataTypeEnumTypeMeters MetricMetadataTypeEnum = "TYPE_METERS"
MetricMetadataTypeEnumTypeKilometers MetricMetadataTypeEnum = "TYPE_KILOMETERS"
)


type MetricMetadata struct {
    APIName *string `json:"apiName,omitempty"`
    BlockedReasons []MetricMetadataBlockedReasonsEnum `json:"blockedReasons,omitempty"`
    Category *string `json:"category,omitempty"`
    CustomDefinition *bool `json:"customDefinition,omitempty"`
    DeprecatedAPINames []string `json:"deprecatedApiNames,omitempty"`
    Description *string `json:"description,omitempty"`
    Expression *string `json:"expression,omitempty"`
    Type *MetricMetadataTypeEnum `json:"type,omitempty"`
    UIName *string `json:"uiName,omitempty"`
    
}

