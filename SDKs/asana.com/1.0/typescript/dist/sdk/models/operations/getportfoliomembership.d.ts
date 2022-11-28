import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfolioMembershipPathParams extends SpeakeasyBase {
    portfolioMembershipGid: string;
}
export declare class GetPortfolioMembershipQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetPortfolioMembership200ApplicationJson extends SpeakeasyBase {
    data?: shared.PortfolioMembershipResponse;
}
export declare class GetPortfolioMembershipRequest extends SpeakeasyBase {
    pathParams: GetPortfolioMembershipPathParams;
    queryParams: GetPortfolioMembershipQueryParams;
}
export declare class GetPortfolioMembershipResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getPortfolioMembership200ApplicationJsonObject?: GetPortfolioMembership200ApplicationJson;
}
