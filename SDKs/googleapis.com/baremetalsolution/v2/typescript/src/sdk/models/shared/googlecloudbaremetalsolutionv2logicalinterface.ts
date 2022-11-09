import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogicalNetworkInterface } from "./logicalnetworkinterface";


// GoogleCloudBaremetalsolutionV2LogicalInterface
/** 
 * Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
**/
export class GoogleCloudBaremetalsolutionV2LogicalInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=interfaceIndex" })
  interfaceIndex?: number;

  @Metadata({ data: "json, name=logicalNetworkInterfaces", elemType: shared.LogicalNetworkInterface })
  logicalNetworkInterfaces?: LogicalNetworkInterface[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
