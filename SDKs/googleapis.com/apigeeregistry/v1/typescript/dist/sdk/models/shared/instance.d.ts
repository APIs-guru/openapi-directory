import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigInput } from "./config";
/**
 * An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
**/
export declare class InstanceInput extends SpeakeasyBase {
    config?: ConfigInput;
    name?: string;
}
