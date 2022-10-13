package operations

type ProtocolMqttGetStatsHdrResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ProtocolMqttGetStatsHdr200ApplicationJSONStrings []string
}
