import { SpeakeasyBase } from "../../../internal/utils";
import { GatewaySummary } from "./gatewaysummary";
export declare class ListGatewaysResponse extends SpeakeasyBase {
    gatewaySummaries: GatewaySummary[];
    nextToken?: string;
}
