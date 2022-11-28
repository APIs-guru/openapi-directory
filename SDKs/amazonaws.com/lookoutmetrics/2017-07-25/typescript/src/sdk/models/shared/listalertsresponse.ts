import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertSummary } from "./alertsummary";



export class ListAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlertSummaryList", elemType: AlertSummary })
  alertSummaryList?: AlertSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
