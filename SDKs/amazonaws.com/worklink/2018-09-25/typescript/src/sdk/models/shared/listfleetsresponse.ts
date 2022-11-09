import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FleetSummary } from "./fleetsummary";


export class ListFleetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetSummaryList", elemType: shared.FleetSummary })
  fleetSummaryList?: FleetSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
