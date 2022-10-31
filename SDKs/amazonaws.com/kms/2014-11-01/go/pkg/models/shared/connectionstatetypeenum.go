package shared




type ConnectionStateTypeEnum string

const (
    ConnectionStateTypeEnumConnected ConnectionStateTypeEnum = "CONNECTED"
ConnectionStateTypeEnumConnecting ConnectionStateTypeEnum = "CONNECTING"
ConnectionStateTypeEnumFailed ConnectionStateTypeEnum = "FAILED"
ConnectionStateTypeEnumDisconnected ConnectionStateTypeEnum = "DISCONNECTED"
ConnectionStateTypeEnumDisconnecting ConnectionStateTypeEnum = "DISCONNECTING"
)


