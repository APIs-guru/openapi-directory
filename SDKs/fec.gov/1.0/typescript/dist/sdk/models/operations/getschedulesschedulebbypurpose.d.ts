import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleBByPurposeQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    page?: number;
    perPage?: number;
    purpose?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleBByPurposeRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleBByPurposeQueryParams;
}
export declare class GetSchedulesScheduleBByPurposeResponse extends SpeakeasyBase {
    contentType: string;
    scheduleBByPurposePage?: shared.ScheduleBByPurposePage;
    statusCode: number;
}
