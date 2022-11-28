import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Greengrass } from "./greengrass";
import { GreengrassV2 } from "./greengrassv2";



// GatewayPlatform
/** 
 * Contains a gateway's platform information.
**/
export class GatewayPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=greengrass" })
  greengrass?: Greengrass;

  @SpeakeasyMetadata({ data: "json, name=greengrassV2" })
  greengrassV2?: GreengrassV2;
}
