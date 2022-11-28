import { SpeakeasyBase } from "../../../internal/utils";
import { ImageVersionSortByEnum } from "./imageversionsortbyenum";
import { ImageVersionSortOrderEnum } from "./imageversionsortorderenum";
export declare class ListImageVersionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    imageName: string;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortBy?: ImageVersionSortByEnum;
    sortOrder?: ImageVersionSortOrderEnum;
}
