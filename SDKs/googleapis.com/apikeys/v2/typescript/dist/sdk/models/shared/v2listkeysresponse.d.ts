import { SpeakeasyBase } from "../../../internal/utils/utils";
import { V2Key } from "./v2key";
/**
 * Response message for `ListKeys` method.
**/
export declare class V2ListKeysResponse extends SpeakeasyBase {
    keys?: V2Key[];
    nextPageToken?: string;
}
