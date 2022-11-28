import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSpec } from "./resourcespec";
/**
 * The JupyterServer app settings.
**/
export declare class JupyterServerAppSettings extends SpeakeasyBase {
    defaultResourceSpec?: ResourceSpec;
    lifecycleConfigArns?: string[];
}
