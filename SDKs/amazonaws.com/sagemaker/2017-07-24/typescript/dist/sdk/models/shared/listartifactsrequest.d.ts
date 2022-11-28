import { SpeakeasyBase } from "../../../internal/utils";
import { SortArtifactsByEnum } from "./sortartifactsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListArtifactsRequest extends SpeakeasyBase {
    artifactType?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortArtifactsByEnum;
    sortOrder?: SortOrderEnum;
    sourceUri?: string;
}
