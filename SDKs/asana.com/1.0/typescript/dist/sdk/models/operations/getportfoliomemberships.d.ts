import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioMembershipsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    portfolio?: string;
    user?: string;
    workspace?: string;
}
export declare class GetPortfolioMemberships200ApplicationJson extends SpeakeasyBase {
    data?: shared.PortfolioMembershipCompact[];
}
export declare class GetPortfolioMembershipsRequest extends SpeakeasyBase {
    queryParams: GetPortfolioMembershipsQueryParams;
}
export declare class GetPortfolioMembershipsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getPortfolioMemberships200ApplicationJsonObject?: GetPortfolioMemberships200ApplicationJson;
}
