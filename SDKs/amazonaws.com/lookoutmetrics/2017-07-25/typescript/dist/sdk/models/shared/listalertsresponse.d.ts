import { SpeakeasyBase } from "../../../internal/utils";
import { AlertSummary } from "./alertsummary";
export declare class ListAlertsResponse extends SpeakeasyBase {
    alertSummaryList?: AlertSummary[];
    nextToken?: string;
}
