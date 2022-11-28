import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpaceParticipantsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetSpaceParticipantsFilterTypeEnum {
    None = "NONE",
    AccessType = "ACCESS_TYPE",
    Role = "ROLE",
    State = "STATE"
}
export declare enum GetSpaceParticipantsSortByEnum {
    DisplayName = "DISPLAY_NAME",
    Name = "NAME",
    FirstName = "FIRST_NAME"
}
export declare enum GetSpaceParticipantsSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class GetSpaceParticipantsQueryParams extends SpeakeasyBase {
    filterType: GetSpaceParticipantsFilterTypeEnum;
    filterValue?: string;
    numberOfResults?: number;
    query?: string;
    searchPointer?: string;
    sortBy: GetSpaceParticipantsSortByEnum;
    sortOrder: GetSpaceParticipantsSortOrderEnum;
}
export declare class GetSpaceParticipantsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetSpaceParticipantsRequest extends SpeakeasyBase {
    pathParams: GetSpaceParticipantsPathParams;
    queryParams: GetSpaceParticipantsQueryParams;
    security: GetSpaceParticipantsSecurity;
}
export declare class GetSpaceParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantsSearchResult?: any;
    statusCode: number;
}
