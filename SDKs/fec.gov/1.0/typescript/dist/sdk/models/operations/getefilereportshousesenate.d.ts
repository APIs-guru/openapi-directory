import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEfileReportsHouseSenateQueryParams extends SpeakeasyBase {
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
export declare class GetEfileReportsHouseSenateRequest extends SpeakeasyBase {
    queryParams: GetEfileReportsHouseSenateQueryParams;
}
export declare class GetEfileReportsHouseSenateResponse extends SpeakeasyBase {
    baseF3FilingPage?: shared.BaseF3FilingPage;
    contentType: string;
    statusCode: number;
}
