import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogicalNetworkInterface } from "./logicalnetworkinterface";



// GoogleCloudBaremetalsolutionV2LogicalInterface
/** 
 * Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
**/
export class GoogleCloudBaremetalsolutionV2LogicalInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interfaceIndex" })
  interfaceIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=logicalNetworkInterfaces", elemType: LogicalNetworkInterface })
  logicalNetworkInterfaces?: LogicalNetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
