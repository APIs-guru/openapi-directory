import { SpeakeasyBase } from "../../../internal/utils";
import { ServerEvent } from "./serverevent";
export declare class DescribeEventsResponse extends SpeakeasyBase {
    nextToken?: string;
    serverEvents?: ServerEvent[];
}
