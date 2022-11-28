package shared

// DestinationSchema
// Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.
type DestinationSchema struct {
	RecordFormatType RecordFormatTypeEnum `json:"RecordFormatType"`
}
