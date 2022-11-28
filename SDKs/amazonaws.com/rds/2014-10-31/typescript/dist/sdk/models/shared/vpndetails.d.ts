import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the Amazon Web Services website.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
**/
export declare class VpnDetails extends SpeakeasyBase {
    vpnGatewayIp?: string;
    vpnId?: string;
    vpnName?: string;
    vpnPsk?: string;
    vpnState?: string;
    vpnTunnelOriginatorIp?: string;
}
