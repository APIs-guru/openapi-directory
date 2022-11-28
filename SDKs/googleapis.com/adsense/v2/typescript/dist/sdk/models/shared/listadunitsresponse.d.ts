import { SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";
/**
 * Response definition for the adunit list rpc.
**/
export declare class ListAdUnitsResponse extends SpeakeasyBase {
    adUnits?: AdUnit[];
    nextPageToken?: string;
}
