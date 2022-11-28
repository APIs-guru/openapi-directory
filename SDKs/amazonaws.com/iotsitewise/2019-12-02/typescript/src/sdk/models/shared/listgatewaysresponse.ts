import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewaySummary } from "./gatewaysummary";



export class ListGatewaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewaySummaries", elemType: GatewaySummary })
  gatewaySummaries: GatewaySummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
