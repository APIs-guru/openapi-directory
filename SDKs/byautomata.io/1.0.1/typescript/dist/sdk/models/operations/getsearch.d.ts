import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchQueryParams extends SpeakeasyBase {
    page?: string;
    terms: string;
}
export declare class GetSearch200ApplicationJson extends SpeakeasyBase {
    callsPerMonth?: string;
    companies?: shared.SimilarCompanySearch[];
    countRemaining?: string;
    renewalDate?: string;
}
export declare class GetSearchRequest extends SpeakeasyBase {
    queryParams: GetSearchQueryParams;
}
export declare class GetSearchResponse extends SpeakeasyBase {
    contentType: string;
    getSearch200ApplicationJsonObject?: GetSearch200ApplicationJson;
    statusCode: number;
}
