import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAEfileQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    contributorCity?: string[];
    contributorEmployer?: string[];
    contributorName?: string[];
    contributorOccupation?: string[];
    contributorState?: string[];
    imageNumber?: string[];
    lineNumber?: string;
    maxAmount?: string;
    maxDate?: Date;
    maxImageNumber?: string;
    minAmount?: string;
    minDate?: Date;
    minImageNumber?: string;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleAEfileRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAEfileQueryParams;
}
export declare class GetSchedulesScheduleAEfileResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAEfilePage?: shared.ScheduleAEfilePage;
    statusCode: number;
}
