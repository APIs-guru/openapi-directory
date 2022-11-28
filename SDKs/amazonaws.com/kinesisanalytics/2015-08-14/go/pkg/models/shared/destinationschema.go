package shared

// DestinationSchema
// Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
type DestinationSchema struct {
	RecordFormatType RecordFormatTypeEnum `json:"RecordFormatType"`
}
