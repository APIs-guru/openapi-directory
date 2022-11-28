import { SpeakeasyBase } from "../../../internal/utils";
import { ContentModerationSortByEnum } from "./contentmoderationsortbyenum";
export declare class GetContentModerationRequest extends SpeakeasyBase {
    jobId: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: ContentModerationSortByEnum;
}
