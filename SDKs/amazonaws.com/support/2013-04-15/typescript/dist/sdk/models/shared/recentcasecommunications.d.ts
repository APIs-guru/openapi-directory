import { SpeakeasyBase } from "../../../internal/utils";
import { Communication } from "./communication";
/**
 * The five most recent communications associated with the case.
**/
export declare class RecentCaseCommunications extends SpeakeasyBase {
    communications?: Communication[];
    nextToken?: string;
}
