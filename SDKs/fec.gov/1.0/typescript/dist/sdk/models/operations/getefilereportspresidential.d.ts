import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEfileReportsPresidentialQueryParams extends SpeakeasyBase {
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
export declare class GetEfileReportsPresidentialRequest extends SpeakeasyBase {
    queryParams: GetEfileReportsPresidentialQueryParams;
}
export declare class GetEfileReportsPresidentialResponse extends SpeakeasyBase {
    baseF3PFilingPage?: shared.BaseF3PFilingPage;
    contentType: string;
    statusCode: number;
}
