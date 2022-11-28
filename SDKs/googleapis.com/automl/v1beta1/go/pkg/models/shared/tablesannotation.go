package shared

// TablesAnnotation
// Contains annotation details specific to Tables.
type TablesAnnotation struct {
	BaselineScore         *float32                `json:"baselineScore,omitempty"`
	PredictionInterval    *DoubleRange            `json:"predictionInterval,omitempty"`
	Score                 *float32                `json:"score,omitempty"`
	TablesModelColumnInfo []TablesModelColumnInfo `json:"tablesModelColumnInfo,omitempty"`
	Value                 *interface{}            `json:"value,omitempty"`
}
