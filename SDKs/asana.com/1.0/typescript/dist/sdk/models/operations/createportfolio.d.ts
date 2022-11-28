import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePortfolioQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreatePortfolioRequestBodyInput extends SpeakeasyBase {
    data?: shared.PortfolioRequestInput;
}
export declare class CreatePortfolio201ApplicationJson extends SpeakeasyBase {
    data?: shared.PortfolioResponse;
}
export declare class CreatePortfolioRequest extends SpeakeasyBase {
    queryParams: CreatePortfolioQueryParams;
    request: CreatePortfolioRequestBodyInput;
}
export declare class CreatePortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createPortfolio201ApplicationJsonObject?: CreatePortfolio201ApplicationJson;
}
