import { SpeakeasyBase } from "../../../internal/utils";
import { Robot } from "./robot";
export declare class ListRobotsResponse extends SpeakeasyBase {
    nextToken?: string;
    robots?: Robot[];
}
