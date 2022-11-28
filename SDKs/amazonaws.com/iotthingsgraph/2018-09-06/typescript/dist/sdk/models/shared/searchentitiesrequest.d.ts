import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { EntityFilter } from "./entityfilter";
export declare class SearchEntitiesRequest extends SpeakeasyBase {
    entityTypes: EntityTypeEnum[];
    filters?: EntityFilter[];
    maxResults?: number;
    namespaceVersion?: number;
    nextToken?: string;
}
