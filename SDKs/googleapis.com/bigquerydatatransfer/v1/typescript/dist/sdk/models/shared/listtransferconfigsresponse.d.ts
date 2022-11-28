import { SpeakeasyBase } from "../../../internal/utils";
import { TransferConfig } from "./transferconfig";
/**
 * The returned list of pipelines in the project.
**/
export declare class ListTransferConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transferConfigs?: TransferConfig[];
}
