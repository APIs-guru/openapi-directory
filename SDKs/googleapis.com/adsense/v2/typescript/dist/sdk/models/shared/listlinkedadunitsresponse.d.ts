import { SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";
/**
 * Response definition for the ad units linked to a custom channel list rpc.
**/
export declare class ListLinkedAdUnitsResponse extends SpeakeasyBase {
    adUnits?: AdUnit[];
    nextPageToken?: string;
}
