package shared

type InterfaceDescriptor struct {
	DstIPAddress  *string
	DstMacAddress *string
	InterfaceType InterfaceTypeEnum
	SrcMacAddress *string
	TunnelInfo    *TunnelInfo
}
