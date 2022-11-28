import { SpeakeasyBase } from "../../../internal/utils";
import { OnFailure } from "./onfailure";
import { OnSuccess } from "./onsuccess";
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export declare class DestinationConfig extends SpeakeasyBase {
    onFailure?: OnFailure;
    onSuccess?: OnSuccess;
}
