import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
export declare class DescribeEventsResponse extends SpeakeasyBase {
    events?: Event[];
    nextToken?: string;
}
