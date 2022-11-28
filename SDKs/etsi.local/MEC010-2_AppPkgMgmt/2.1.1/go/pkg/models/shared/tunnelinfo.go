package shared

type TunnelInfo struct {
	TunnelDstAddress   string
	TunnelSpecificData *string
	TunnelSrcAddress   string
	TunnelType         TunnelTypeEnum
}
