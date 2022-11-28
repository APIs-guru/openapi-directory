import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetViewsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetViewsQueryParams extends SpeakeasyBase {
    per?: shared.PerEnum;
}
export declare class ReposGetViewsRequest extends SpeakeasyBase {
    pathParams: ReposGetViewsPathParams;
    queryParams: ReposGetViewsQueryParams;
}
export declare class ReposGetViewsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    viewTraffic?: shared.ViewTraffic;
}
