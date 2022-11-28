import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetSummary } from "./fleetsummary";



export class ListFleetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetSummaryList", elemType: FleetSummary })
  fleetSummaryList?: FleetSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
