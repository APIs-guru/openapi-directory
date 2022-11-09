import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchVersionsPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class SearchVersionsQueryParams extends SpeakeasyBase {
    limit: number;
    offset: number;
}
export declare class SearchVersionsRequest extends SpeakeasyBase {
    pathParams: SearchVersionsPathParams;
    queryParams: SearchVersionsQueryParams;
}
export declare class SearchVersionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    versionSearchResults?: shared.VersionSearchResults;
}
