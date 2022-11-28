import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListPagesBuildsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListPagesBuildsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListPagesBuildsRequest extends SpeakeasyBase {
    pathParams: ReposListPagesBuildsPathParams;
    queryParams: ReposListPagesBuildsQueryParams;
}
export declare class ReposListPagesBuildsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    pageBuilds?: shared.PageBuild[];
}
