import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
export declare class DescribeServiceUpdatesRequest extends SpeakeasyBase {
    clusterNames?: string[];
    maxResults?: number;
    nextToken?: string;
    serviceUpdateName?: string;
    status?: ServiceUpdateStatusEnum[];
}
