package shared




type GoogleCloudApigeeV1TargetServerProtocolEnum string

const (
    GoogleCloudApigeeV1TargetServerProtocolEnumProtocolUnspecified GoogleCloudApigeeV1TargetServerProtocolEnum = "PROTOCOL_UNSPECIFIED"
GoogleCloudApigeeV1TargetServerProtocolEnumHTTP GoogleCloudApigeeV1TargetServerProtocolEnum = "HTTP"
GoogleCloudApigeeV1TargetServerProtocolEnumGrpc GoogleCloudApigeeV1TargetServerProtocolEnum = "GRPC"
)


type GoogleCloudApigeeV1TargetServer struct {
    Description *string `json:"description,omitempty"`
    Host *string `json:"host,omitempty"`
    IsEnabled *bool `json:"isEnabled,omitempty"`
    Name *string `json:"name,omitempty"`
    Port *int32 `json:"port,omitempty"`
    Protocol *GoogleCloudApigeeV1TargetServerProtocolEnum `json:"protocol,omitempty"`
    SSlInfo *GoogleCloudApigeeV1TLSInfo `json:"sSLInfo,omitempty"`
    
}

