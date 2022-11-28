import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";



// VpcEndpoint
/** 
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
**/
export class VpcEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata()
  vpcEndpointId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
