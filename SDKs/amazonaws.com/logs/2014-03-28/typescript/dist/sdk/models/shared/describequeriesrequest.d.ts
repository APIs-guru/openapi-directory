import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryStatusEnum } from "./querystatusenum";
export declare class DescribeQueriesRequest extends SpeakeasyBase {
    logGroupName?: string;
    maxResults?: number;
    nextToken?: string;
    status?: QueryStatusEnum;
}
