import { SpeakeasyBase } from "../../../internal/utils";
import { JobLog } from "./joblog";
export declare class DescribeJobLogItemsResponse extends SpeakeasyBase {
    items?: JobLog[];
    nextToken?: string;
}
