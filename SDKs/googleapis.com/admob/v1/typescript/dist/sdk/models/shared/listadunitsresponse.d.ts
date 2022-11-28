import { SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";
/**
 * Response for the ad units list request.
**/
export declare class ListAdUnitsResponse extends SpeakeasyBase {
    adUnits?: AdUnit[];
    nextPageToken?: string;
}
