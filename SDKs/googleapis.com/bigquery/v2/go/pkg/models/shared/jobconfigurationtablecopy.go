package shared

type JobConfigurationTableCopy struct {
	CreateDisposition                  *string                  `json:"createDisposition,omitempty"`
	DestinationEncryptionConfiguration *EncryptionConfiguration `json:"destinationEncryptionConfiguration,omitempty"`
	DestinationExpirationTime          *interface{}             `json:"destinationExpirationTime,omitempty"`
	DestinationTable                   *TableReference          `json:"destinationTable,omitempty"`
	OperationType                      *string                  `json:"operationType,omitempty"`
	SourceTable                        *TableReference          `json:"sourceTable,omitempty"`
	SourceTables                       []TableReference         `json:"sourceTables,omitempty"`
	WriteDisposition                   *string                  `json:"writeDisposition,omitempty"`
}
