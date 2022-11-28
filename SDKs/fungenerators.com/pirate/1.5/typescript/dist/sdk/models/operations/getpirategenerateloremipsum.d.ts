import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPirateGenerateLoremIpsumQueryParams extends SpeakeasyBase {
    limit?: number;
    type?: string;
}
export declare class GetPirateGenerateLoremIpsumSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetPirateGenerateLoremIpsumRequest extends SpeakeasyBase {
    queryParams: GetPirateGenerateLoremIpsumQueryParams;
    security: GetPirateGenerateLoremIpsumSecurity;
}
export declare class GetPirateGenerateLoremIpsumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
