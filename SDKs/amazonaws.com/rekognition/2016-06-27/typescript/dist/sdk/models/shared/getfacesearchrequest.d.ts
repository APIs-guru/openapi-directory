import { SpeakeasyBase } from "../../../internal/utils";
import { FaceSearchSortByEnum } from "./facesearchsortbyenum";
export declare class GetFaceSearchRequest extends SpeakeasyBase {
    jobId: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: FaceSearchSortByEnum;
}
