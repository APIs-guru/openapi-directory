import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListContributorsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListContributorsQueryParams extends SpeakeasyBase {
    anon?: string;
    page?: number;
    perPage?: number;
}
export declare class ReposListContributorsRequest extends SpeakeasyBase {
    pathParams: ReposListContributorsPathParams;
    queryParams: ReposListContributorsQueryParams;
}
export declare class ReposListContributorsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    contributors?: shared.Contributor[];
}
