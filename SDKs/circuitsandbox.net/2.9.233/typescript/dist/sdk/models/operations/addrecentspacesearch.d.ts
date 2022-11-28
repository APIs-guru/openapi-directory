import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddRecentSpaceSearchRequestBodyScopeEnum {
    All = "ALL",
    Spaces = "SPACES",
    Topicby = "TOPICBY",
    Files = "FILES",
    Tags = "TAGS",
    Labels = "LABELS",
    Date = "DATE"
}
export declare class AddRecentSpaceSearchRequestBody extends SpeakeasyBase {
    endTime?: Date;
    scope: AddRecentSpaceSearchRequestBodyScopeEnum;
    searchTerm: string;
    startTime?: Date;
}
export declare class AddRecentSpaceSearchSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AddRecentSpaceSearchRequest extends SpeakeasyBase {
    request: AddRecentSpaceSearchRequestBody;
    security: AddRecentSpaceSearchSecurity;
}
export declare class AddRecentSpaceSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
