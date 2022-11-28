import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListGlobalWebhooksQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class EnterpriseAdminListGlobalWebhooksHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class EnterpriseAdminListGlobalWebhooksRequest extends SpeakeasyBase {
    queryParams: EnterpriseAdminListGlobalWebhooksQueryParams;
    headers: EnterpriseAdminListGlobalWebhooksHeaders;
}
export declare class EnterpriseAdminListGlobalWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    globalHooks?: shared.GlobalHook[];
}
