import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleBEfileQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    disbursementDescription?: string[];
    imageNumber?: string[];
    maxAmount?: string;
    maxDate?: Date;
    minAmount?: string;
    minDate?: Date;
    page?: number;
    perPage?: number;
    recipientCity?: string[];
    recipientState?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleBEfileRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleBEfileQueryParams;
}
export declare class GetSchedulesScheduleBEfileResponse extends SpeakeasyBase {
    contentType: string;
    scheduleBEfilePage?: shared.ScheduleBEfilePage;
    statusCode: number;
}
