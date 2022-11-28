import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartBasicSpacesSearchScopeEnum {
    All = "ALL",
    Spaces = "SPACES",
    Topicby = "TOPICBY",
    Files = "FILES",
    Tags = "TAGS",
    Labels = "LABELS",
    Date = "DATE"
}
export declare class StartBasicSpacesSearchQueryParams extends SpeakeasyBase {
    endTime?: Date;
    prioritySpaces?: string[];
    scope: StartBasicSpacesSearchScopeEnum;
    searchTerm: string;
    startTime?: Date;
}
export declare class StartBasicSpacesSearchSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class StartBasicSpacesSearchRequest extends SpeakeasyBase {
    queryParams: StartBasicSpacesSearchQueryParams;
    security: StartBasicSpacesSearchSecurity;
}
export declare class StartBasicSpacesSearchResponse extends SpeakeasyBase {
    basicSearchResult?: any;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
