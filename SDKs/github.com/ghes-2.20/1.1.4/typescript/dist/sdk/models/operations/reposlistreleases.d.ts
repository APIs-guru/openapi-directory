import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListReleasesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListReleasesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListReleasesRequest extends SpeakeasyBase {
    pathParams: ReposListReleasesPathParams;
    queryParams: ReposListReleasesQueryParams;
}
export declare class ReposListReleasesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    releases?: shared.Release[];
}
