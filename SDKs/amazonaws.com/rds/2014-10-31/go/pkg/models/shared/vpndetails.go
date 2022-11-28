package shared

// VpnDetails
// <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the Amazon Web Services website.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
type VpnDetails struct {
	VpnGatewayIP          *string
	VpnID                 *string
	VpnName               *string
	VpnPsk                *string
	VpnState              *string
	VpnTunnelOriginatorIP *string
}
