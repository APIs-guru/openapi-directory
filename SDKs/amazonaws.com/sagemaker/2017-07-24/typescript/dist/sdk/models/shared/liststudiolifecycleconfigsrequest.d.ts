import { SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
import { StudioLifecycleConfigSortKeyEnum } from "./studiolifecycleconfigsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListStudioLifecycleConfigsRequest extends SpeakeasyBase {
    appTypeEquals?: StudioLifecycleConfigAppTypeEnum;
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    modifiedTimeAfter?: Date;
    modifiedTimeBefore?: Date;
    nameContains?: string;
    nextToken?: string;
    sortBy?: StudioLifecycleConfigSortKeyEnum;
    sortOrder?: SortOrderEnum;
}
