import { SpeakeasyBase } from "../../../internal/utils";
import { Insight } from "./insight";
export declare class GetInsightsResponse extends SpeakeasyBase {
    insights: Insight[];
    nextToken?: string;
}
