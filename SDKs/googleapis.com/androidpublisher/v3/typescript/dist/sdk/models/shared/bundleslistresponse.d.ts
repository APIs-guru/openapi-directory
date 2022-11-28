import { SpeakeasyBase } from "../../../internal/utils";
import { Bundle } from "./bundle";
/**
 * Response listing all app bundles.
**/
export declare class BundlesListResponse extends SpeakeasyBase {
    bundles?: Bundle[];
    kind?: string;
}
