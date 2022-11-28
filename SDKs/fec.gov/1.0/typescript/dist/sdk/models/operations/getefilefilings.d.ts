import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEfileFilingsQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    fileNumber?: number[];
    maxReceiptDate?: Date;
    minReceiptDate?: Date;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetEfileFilingsRequest extends SpeakeasyBase {
    queryParams: GetEfileFilingsQueryParams;
}
export declare class GetEfileFilingsResponse extends SpeakeasyBase {
    contentType: string;
    eFilingsPage?: shared.EFilingsPage;
    statusCode: number;
}
