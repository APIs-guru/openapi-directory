import { SpeakeasyBase } from "../../../internal/utils";
import { SessionFilter } from "./sessionfilter";
import { SessionStateEnum } from "./sessionstateenum";
export declare class DescribeSessionsRequest extends SpeakeasyBase {
    filters?: SessionFilter[];
    maxResults?: number;
    nextToken?: string;
    state: SessionStateEnum;
}
