import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSortByEnum } from "./imagesortbyenum";
import { ImageSortOrderEnum } from "./imagesortorderenum";
export declare class ListImagesRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ImageSortByEnum;
    sortOrder?: ImageSortOrderEnum;
}
