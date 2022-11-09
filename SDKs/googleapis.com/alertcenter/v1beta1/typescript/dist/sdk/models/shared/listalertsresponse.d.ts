import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Alert } from "./alert";
/**
 * Response message for an alert listing request.
**/
export declare class ListAlertsResponse extends SpeakeasyBase {
    alerts?: Alert[];
    nextPageToken?: string;
}
