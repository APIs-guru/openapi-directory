import { SpeakeasyBase } from "../../../internal/utils";
import { CustomImage } from "./customimage";
import { ResourceSpec } from "./resourcespec";
/**
 * The KernelGateway app settings.
**/
export declare class KernelGatewayAppSettings extends SpeakeasyBase {
    customImages?: CustomImage[];
    defaultResourceSpec?: ResourceSpec;
    lifecycleConfigArns?: string[];
}
