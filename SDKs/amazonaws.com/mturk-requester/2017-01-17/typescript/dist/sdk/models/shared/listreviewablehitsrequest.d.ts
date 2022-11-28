import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewableHitStatusEnum } from "./reviewablehitstatusenum";
export declare class ListReviewableHiTsRequest extends SpeakeasyBase {
    hitTypeId?: string;
    maxResults?: number;
    nextToken?: string;
    status?: ReviewableHitStatusEnum;
}
