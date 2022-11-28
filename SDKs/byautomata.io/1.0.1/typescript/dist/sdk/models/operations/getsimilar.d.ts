import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSimilarQueryParams extends SpeakeasyBase {
    link: string;
    page?: string;
}
export declare class GetSimilar200ApplicationJson extends SpeakeasyBase {
    callsPerMonth?: string;
    companies?: shared.SimilarCompany[];
    countRemaining?: string;
    inputCompany?: shared.InputCompany;
    renewalDate?: string;
}
export declare class GetSimilarRequest extends SpeakeasyBase {
    queryParams: GetSimilarQueryParams;
}
export declare class GetSimilarResponse extends SpeakeasyBase {
    contentType: string;
    getSimilar200ApplicationJsonObject?: GetSimilar200ApplicationJson;
    statusCode: number;
}
