import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobLog } from "./joblog";
export declare class DescribeJobLogItemsResponse extends SpeakeasyBase {
    items?: JobLog[];
    nextToken?: string;
}
