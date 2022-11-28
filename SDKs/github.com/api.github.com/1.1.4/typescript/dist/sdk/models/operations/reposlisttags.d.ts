import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListTagsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListTagsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListTagsRequest extends SpeakeasyBase {
    pathParams: ReposListTagsPathParams;
    queryParams: ReposListTagsQueryParams;
}
export declare class ReposListTagsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    tags?: shared.Tag[];
}
