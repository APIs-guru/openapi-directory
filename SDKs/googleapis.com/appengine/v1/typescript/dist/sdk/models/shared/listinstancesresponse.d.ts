import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response message for Instances.ListInstances.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: Instance[];
    nextPageToken?: string;
}
