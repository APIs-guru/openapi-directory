import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListPersonalAccessTokensQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class EnterpriseAdminListPersonalAccessTokensRequest extends SpeakeasyBase {
    queryParams: EnterpriseAdminListPersonalAccessTokensQueryParams;
}
export declare class EnterpriseAdminListPersonalAccessTokensResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    authorizations?: shared.Authorization[];
}
