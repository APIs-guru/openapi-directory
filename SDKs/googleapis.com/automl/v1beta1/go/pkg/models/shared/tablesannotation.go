package shared

type TablesAnnotation struct {
	BaselineScore         *float32                `json:"baselineScore"`
	PredictionInterval    *DoubleRange            `json:"predictionInterval"`
	Score                 *float32                `json:"score"`
	TablesModelColumnInfo []TablesModelColumnInfo `json:"tablesModelColumnInfo"`
	Value                 *interface{}            `json:"value"`
}
