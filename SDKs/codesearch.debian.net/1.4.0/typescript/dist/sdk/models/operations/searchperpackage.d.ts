import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SearchperpackageMatchModeEnum {
    Literal = "literal",
    Regexp = "regexp"
}
export declare class SearchperpackageQueryParams extends SpeakeasyBase {
    matchMode?: SearchperpackageMatchModeEnum;
    query: string;
}
export declare class SearchperpackageSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SearchperpackageRequest extends SpeakeasyBase {
    queryParams: SearchperpackageQueryParams;
    security: SearchperpackageSecurity;
}
export declare class SearchperpackageResponse extends SpeakeasyBase {
    contentType: string;
    packageSearchResults?: shared.PackageSearchResult[];
    statusCode: number;
}
