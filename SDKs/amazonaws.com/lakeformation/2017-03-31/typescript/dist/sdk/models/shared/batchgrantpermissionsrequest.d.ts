import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPermissionsRequestEntry } from "./batchpermissionsrequestentry";
export declare class BatchGrantPermissionsRequest extends SpeakeasyBase {
    catalogId?: string;
    entries: BatchPermissionsRequestEntry[];
}
