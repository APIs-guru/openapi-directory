import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShakespeareGenerateLoremIpsumQueryParams extends SpeakeasyBase {
    limit?: number;
    type?: string;
}
export declare class GetShakespeareGenerateLoremIpsumSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetShakespeareGenerateLoremIpsumRequest extends SpeakeasyBase {
    queryParams: GetShakespeareGenerateLoremIpsumQueryParams;
    security: GetShakespeareGenerateLoremIpsumSecurity;
}
export declare class GetShakespeareGenerateLoremIpsumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
