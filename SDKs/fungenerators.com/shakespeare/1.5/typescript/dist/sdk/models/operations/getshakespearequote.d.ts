import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShakespeareQuoteSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetShakespeareQuoteRequest extends SpeakeasyBase {
    security: GetShakespeareQuoteSecurity;
}
export declare class GetShakespeareQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
