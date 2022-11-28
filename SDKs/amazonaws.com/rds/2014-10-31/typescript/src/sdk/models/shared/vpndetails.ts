import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpnDetails
/** 
 * <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the Amazon Web Services website.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
**/
export class VpnDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpnGatewayIp?: string;

  @SpeakeasyMetadata()
  vpnId?: string;

  @SpeakeasyMetadata()
  vpnName?: string;

  @SpeakeasyMetadata()
  vpnPsk?: string;

  @SpeakeasyMetadata()
  vpnState?: string;

  @SpeakeasyMetadata()
  vpnTunnelOriginatorIp?: string;
}
