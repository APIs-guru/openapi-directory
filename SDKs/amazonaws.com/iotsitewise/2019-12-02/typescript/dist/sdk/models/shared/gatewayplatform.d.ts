import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Greengrass } from "./greengrass";
import { GreengrassV2 } from "./greengrassv2";
/**
 * Contains a gateway's platform information.
**/
export declare class GatewayPlatform extends SpeakeasyBase {
    greengrass?: Greengrass;
    greengrassV2?: GreengrassV2;
}
