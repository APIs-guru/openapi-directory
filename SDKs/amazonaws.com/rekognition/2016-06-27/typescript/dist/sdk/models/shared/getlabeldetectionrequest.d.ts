import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDetectionSortByEnum } from "./labeldetectionsortbyenum";
export declare class GetLabelDetectionRequest extends SpeakeasyBase {
    jobId: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: LabelDetectionSortByEnum;
}
