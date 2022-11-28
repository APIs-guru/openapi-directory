import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEfileReportsPacPartyQueryParams extends SpeakeasyBase {
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
export declare class GetEfileReportsPacPartyRequest extends SpeakeasyBase {
    queryParams: GetEfileReportsPacPartyQueryParams;
}
export declare class GetEfileReportsPacPartyResponse extends SpeakeasyBase {
    baseF3XFilingPage?: shared.BaseF3XFilingPage;
    contentType: string;
    statusCode: number;
}
