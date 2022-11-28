import { SpeakeasyBase } from "../../../internal/utils";
import { ListDeviceFleetsSortByEnum } from "./listdevicefleetssortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListDeviceFleetsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListDeviceFleetsSortByEnum;
    sortOrder?: SortOrderEnum;
}
