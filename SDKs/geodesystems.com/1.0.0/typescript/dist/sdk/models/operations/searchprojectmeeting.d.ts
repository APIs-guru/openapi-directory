import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchProjectMeetingQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchProjectMeetingLocation?: string;
    searchProjectMeetingParticipants?: string;
    searchProjectMeetingTopic?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchProjectMeetingRequest extends SpeakeasyBase {
    queryParams: SearchProjectMeetingQueryParams;
}
export declare class SearchProjectMeetingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
