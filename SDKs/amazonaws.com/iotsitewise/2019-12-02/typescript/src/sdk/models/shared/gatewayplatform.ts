import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Greengrass } from "./greengrass";
import { GreengrassV2 } from "./greengrassv2";


// GatewayPlatform
/** 
 * Contains a gateway's platform information.
**/
export class GatewayPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=greengrass" })
  greengrass?: Greengrass;

  @Metadata({ data: "json, name=greengrassV2" })
  greengrassV2?: GreengrassV2;
}
