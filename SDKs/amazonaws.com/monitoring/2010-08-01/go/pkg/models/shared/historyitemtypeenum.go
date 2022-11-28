package shared

type HistoryItemTypeEnum string

const (
	HistoryItemTypeEnumConfigurationUpdate HistoryItemTypeEnum = "ConfigurationUpdate"
	HistoryItemTypeEnumStateUpdate         HistoryItemTypeEnum = "StateUpdate"
	HistoryItemTypeEnumAction              HistoryItemTypeEnum = "Action"
)
