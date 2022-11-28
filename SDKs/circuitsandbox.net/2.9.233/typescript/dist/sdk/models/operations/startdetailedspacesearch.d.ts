import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartDetailedSpaceSearchScopeEnum {
    All = "ALL",
    Spaces = "SPACES",
    Topicby = "TOPICBY",
    Files = "FILES",
    Tags = "TAGS",
    Labels = "LABELS",
    Date = "DATE"
}
export declare class StartDetailedSpaceSearchQueryParams extends SpeakeasyBase {
    endTime?: Date;
    scope: StartDetailedSpaceSearchScopeEnum;
    searchId?: string;
    searchTerm: string;
    spaceId: string;
    startTime?: Date;
}
export declare class StartDetailedSpaceSearchSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class StartDetailedSpaceSearchRequest extends SpeakeasyBase {
    queryParams: StartDetailedSpaceSearchQueryParams;
    security: StartDetailedSpaceSearchSecurity;
}
export declare class StartDetailedSpaceSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceSearchResultDetailedBacks?: any[];
    statusCode: number;
}
