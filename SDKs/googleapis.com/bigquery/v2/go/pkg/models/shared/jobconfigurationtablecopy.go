package shared

type JobConfigurationTableCopy struct {
	CreateDisposition                  *string                  `json:"createDisposition"`
	DestinationEncryptionConfiguration *EncryptionConfiguration `json:"destinationEncryptionConfiguration"`
	DestinationExpirationTime          *interface{}             `json:"destinationExpirationTime"`
	DestinationTable                   *TableReference          `json:"destinationTable"`
	OperationType                      *string                  `json:"operationType"`
	SourceTable                        *TableReference          `json:"sourceTable"`
	SourceTables                       []TableReference         `json:"sourceTables"`
	WriteDisposition                   *string                  `json:"writeDisposition"`
}
