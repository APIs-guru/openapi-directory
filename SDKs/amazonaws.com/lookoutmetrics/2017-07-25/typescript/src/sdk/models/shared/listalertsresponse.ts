import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertSummary } from "./alertsummary";


export class ListAlertsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlertSummaryList", elemType: shared.AlertSummary })
  alertSummaryList?: AlertSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
