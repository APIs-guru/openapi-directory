import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Communication } from "./communication";
/**
 * The communications returned by the <a>DescribeCommunications</a> operation.
**/
export declare class DescribeCommunicationsResponse extends SpeakeasyBase {
    communications?: Communication[];
    nextToken?: string;
}
