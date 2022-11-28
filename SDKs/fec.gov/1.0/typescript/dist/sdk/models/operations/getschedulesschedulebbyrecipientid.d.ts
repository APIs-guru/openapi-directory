import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleBByRecipientIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    page?: number;
    perPage?: number;
    recipientId?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleBByRecipientIdRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleBByRecipientIdQueryParams;
}
export declare class GetSchedulesScheduleBByRecipientIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduleBByRecipientIdPage?: shared.ScheduleBByRecipientIdPage;
    statusCode: number;
}
