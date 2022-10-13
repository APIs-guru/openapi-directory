package shared

type GoogleCloudApigeeV1TargetServerProtocolEnum string

const (
	GoogleCloudApigeeV1TargetServerProtocolEnumProtocolUnspecified GoogleCloudApigeeV1TargetServerProtocolEnum = "PROTOCOL_UNSPECIFIED"
	GoogleCloudApigeeV1TargetServerProtocolEnumHTTP                GoogleCloudApigeeV1TargetServerProtocolEnum = "HTTP"
	GoogleCloudApigeeV1TargetServerProtocolEnumGrpc                GoogleCloudApigeeV1TargetServerProtocolEnum = "GRPC"
)

type GoogleCloudApigeeV1TargetServer struct {
	Description *string                                      `json:"description"`
	Host        *string                                      `json:"host"`
	IsEnabled   *bool                                        `json:"isEnabled"`
	Name        *string                                      `json:"name"`
	Port        *int32                                       `json:"port"`
	Protocol    *GoogleCloudApigeeV1TargetServerProtocolEnum `json:"protocol"`
	SSlInfo     *GoogleCloudApigeeV1TLSInfo                  `json:"sSLInfo"`
}
