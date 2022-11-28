import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPortfoliosQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    owner: string;
    workspace: string;
}
export declare class GetPortfolios200ApplicationJson extends SpeakeasyBase {
    data?: shared.PortfolioCompact[];
}
export declare class GetPortfoliosRequest extends SpeakeasyBase {
    queryParams: GetPortfoliosQueryParams;
}
export declare class GetPortfoliosResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getPortfolios200ApplicationJsonObject?: GetPortfolios200ApplicationJson;
}
