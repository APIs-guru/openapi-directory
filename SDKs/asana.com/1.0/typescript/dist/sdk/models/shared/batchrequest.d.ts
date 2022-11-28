import { SpeakeasyBase } from "../../../internal/utils";
import { BatchRequestAction } from "./batchrequestaction";
/**
 * A request object for use in a batch request.
**/
export declare class BatchRequest extends SpeakeasyBase {
    actions?: BatchRequestAction[];
}
