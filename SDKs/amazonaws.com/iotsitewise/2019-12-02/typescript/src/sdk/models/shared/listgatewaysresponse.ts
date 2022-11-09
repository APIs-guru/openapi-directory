import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GatewaySummary } from "./gatewaysummary";


export class ListGatewaysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewaySummaries", elemType: shared.GatewaySummary })
  gatewaySummaries: GatewaySummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
