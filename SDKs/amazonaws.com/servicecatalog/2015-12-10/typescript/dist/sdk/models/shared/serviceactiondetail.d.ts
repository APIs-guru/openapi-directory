import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceActionSummary } from "./serviceactionsummary";
/**
 * An object containing detailed information about the self-service action.
**/
export declare class ServiceActionDetail extends SpeakeasyBase {
    definition?: Map<string, string>;
    serviceActionSummary?: ServiceActionSummary;
}
