import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class DescribeUsersRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
    userName?: string;
}
