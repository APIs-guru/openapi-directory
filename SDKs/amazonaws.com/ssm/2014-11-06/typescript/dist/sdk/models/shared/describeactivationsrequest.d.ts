import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeActivationsFilter } from "./describeactivationsfilter";
export declare class DescribeActivationsRequest extends SpeakeasyBase {
    filters?: DescribeActivationsFilter[];
    maxResults?: number;
    nextToken?: string;
}
