package shared




type HeaderTypeEnum string

const (
    HeaderTypeEnumHeaderTypeUnspecified HeaderTypeEnum = "HEADER_TYPE_UNSPECIFIED"
HeaderTypeEnumDimension HeaderTypeEnum = "DIMENSION"
HeaderTypeEnumMetricTally HeaderTypeEnum = "METRIC_TALLY"
HeaderTypeEnumMetricRatio HeaderTypeEnum = "METRIC_RATIO"
HeaderTypeEnumMetricCurrency HeaderTypeEnum = "METRIC_CURRENCY"
HeaderTypeEnumMetricMilliseconds HeaderTypeEnum = "METRIC_MILLISECONDS"
HeaderTypeEnumMetricDecimal HeaderTypeEnum = "METRIC_DECIMAL"
)


type Header struct {
    CurrencyCode *string `json:"currencyCode,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *HeaderTypeEnum `json:"type,omitempty"`
    
}

