import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * API call volume range and the fees charged when the total number of API calls is within the range.
**/
export declare class GoogleCloudApigeeV1RateRange extends SpeakeasyBase {
    end?: string;
    fee?: GoogleTypeMoney;
    start?: string;
}
