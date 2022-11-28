import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListWebhooksPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListWebhooksQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListWebhooksRequest extends SpeakeasyBase {
    pathParams: ReposListWebhooksPathParams;
    queryParams: ReposListWebhooksQueryParams;
}
export declare class ReposListWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    hooks?: shared.Hook[];
}
