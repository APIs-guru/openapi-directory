import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleBByRecipientQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    page?: number;
    perPage?: number;
    recipientName?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleBByRecipientRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleBByRecipientQueryParams;
}
export declare class GetSchedulesScheduleBByRecipientResponse extends SpeakeasyBase {
    contentType: string;
    scheduleBByRecipientPage?: shared.ScheduleBByRecipientPage;
    statusCode: number;
}
