import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListWebhooksPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsListWebhooksQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class OrgsListWebhooksRequest extends SpeakeasyBase {
    pathParams: OrgsListWebhooksPathParams;
    queryParams: OrgsListWebhooksQueryParams;
}
export declare class OrgsListWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    orgHooks?: shared.OrgHook[];
}
