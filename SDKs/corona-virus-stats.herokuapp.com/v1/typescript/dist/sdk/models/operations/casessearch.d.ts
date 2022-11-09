import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CasesSearchQueryParams extends SpeakeasyBase {
    limit?: number;
    page?: number;
    search?: string;
}
export declare class CasesSearchRequest extends SpeakeasyBase {
    queryParams: CasesSearchQueryParams;
}
export declare class CasesSearch200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.CountryStats[];
}
export declare class CasesSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    casesSearch200ApplicationJsonObject?: CasesSearch200ApplicationJson;
}
